import React from 'react';
import EthImage from '../assets/weth.png';

const CollectionCard = ({ id, name, traits, image }) => {
	return (
		<div className="collection-card">
			<img src={image} alt={name} />
			<div className="details">
				<div className="name">
					{name}
					<div className="identifier">#{id}</div>
				</div>

				<div className="price-container">
					<img src={EthImage} alt="ethImage" className="eth-img" />
					<div className="price">{traits[0].value}</div>{' '}
				</div>
			</div>
		</div>
	);
};

export default CollectionCard;
