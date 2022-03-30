import React, { useEffect, useState } from 'react';
import TwitterLogo from '../assets/owner/twitter.png';
import InstagramLogo from '../assets/owner/instagram.png';
import MoreIcon from '../assets/owner/more.png';
const PunkInfo = ({ selectedPunk, collections }) => {
	const [activePunk, setActivePunk] = useState(collections[selectedPunk]);

	useEffect(() => {
		setActivePunk(collections[selectedPunk]);
	}, [selectedPunk, collections]);

	return (
		<div className="main">
			<div className="main-content">
				<div className="punk-highlight">
					<div className="punk-container">
						<img
							src={activePunk?.image_url}
							alt={activePunk?.name}
							className="selected-punk"
						/>
					</div>
				</div>

				<div className="punk-details" style={{ color: 'white' }}>
					<div className="title">
						{activePunk.name}
						<span className="item-number">•#{activePunk.token_id}</span>
					</div>

					<div className="owner">
						<div className="owner-img-container">
							<img src={activePunk?.owner.profile_img_url} alt="" />
						</div>
						<div className="owner-details">
							<div className="owner-name">
								<div className="owner-address">{activePunk?.owner.address}</div>
								<div className="owner-handle">@folarinfarinto</div>
							</div>
						</div>

						<div className="owner-link">
							<img src={TwitterLogo} alt="" />
						</div>
						<div className="owner-link">
							<img src={InstagramLogo} alt="" />
						</div>
						<div className="owner-link">
							<img src={MoreIcon} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PunkInfo;
