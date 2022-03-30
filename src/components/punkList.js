import React from 'react';
import CollectionCard from './collectionCard';

const PunkList = ({ collections, setSelectedPunk }) => {
	return (
		<div className="punk-list">
			{collections.map((item, index) => (
				<div key={item.token_id} onClick={() => setSelectedPunk(index)}>
					<CollectionCard
						id={item.token_id}
						name={item.name}
						traits={item.traits}
						image={item.image_url}
					/>
				</div>
			))}
		</div>
	);
};

export default PunkList;
