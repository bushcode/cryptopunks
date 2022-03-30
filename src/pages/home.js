import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import axios from 'axios';
import PunkList from '../components/punkList';
import PunkInfo from '../components/punkInfo';
import EmptySearch from '../components/noSearch';

export default function Home() {
	const [collections, setCollections] = React.useState([]);
	const [selectedPunk, setSelectedPunk] = useState(0);
	const [searchText, setSearchText] = useState('');

	const key = process.env.REACT_APP_OPEN_SEA_ADDRESS;
	let savedPunks = JSON.parse(localStorage.getItem('punkList'));

	console.log(searchText);

	const handleSearch = () => {
		if (searchText !== '') {
			let filteredPunks = collections.filter((punk) => {
				return punk.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
			});
			setCollections(filteredPunks);
		} else {
			console.log('something should happen');
			setCollections(savedPunks);
		}
	};

	const getCollection = async () => {
		const response = await axios.get(
			`https://testnets-api.opensea.io/assets?asset_contract_address=${key}&order_direction=asc`,
		);
		const punkList = response.data.assets;
		localStorage.setItem('punkList', JSON.stringify(punkList));
		setCollections(punkList);
	};
	useEffect(() => {
		getCollection();
	}, []);

	useEffect(() => {
		handleSearch();
	}, [searchText]);

	// useEffect(() => {
	// 	if (collections.length > 0) {
	// 		setSelectedPunk(collections[0].token_id);
	// 	}
	// }, []);
	return (
		<div>
			<Header searchText={searchText} setSearchText={setSearchText} />
			{collections.length > 0 ? (
				<>
					<PunkInfo collections={collections} selectedPunk={selectedPunk} />
					<PunkList collections={collections} setSelectedPunk={setSelectedPunk} />
				</>
			) : (
				<EmptySearch />
			)}
		</div>
	);
}
