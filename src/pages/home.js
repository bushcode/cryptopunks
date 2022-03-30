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

	let savedPunks = JSON.parse(localStorage.getItem('punkList'));

	console.log(searchText);

	const handleSearch = () => {
		if (searchText !== '') {
			let filteredPunks = collections.filter((punk) => {
				return punk.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
			});
			setCollections(filteredPunks);
		} else {
			// console.log('something should happen');
			setCollections(savedPunks);
		}
	};

	const getCollection = async () => {
		const response = await axios.get(
			'https://serene-thicket-77721.herokuapp.com/api/fetchNFTs',
		);
		const punkList = response.data;
		console.log(punkList);
		localStorage.setItem('punkList', JSON.stringify(punkList));
		setCollections(punkList);
	};
	useEffect(() => {
		getCollection();
	}, []);

	useEffect(() => {
		handleSearch();
	}, [searchText]);

	useEffect(() => {
		if (collections.length > 0) {
			setSelectedPunk(collections[0].token_id);
		}
	}, []);
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
