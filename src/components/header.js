import React from 'react';
import PunkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import ThemeSwitchIcon from '../assets/header/theme-switch.png';

const Header = ({ searchText, setSearchText }) => {
	return (
		<div className="header">
			<div className="logo-container">
				<img src={PunkLogo} alt="Cryptopunk Logo" className="punk-logo" />
			</div>

			<div className="search-bar">
				<div className="search--icon-box">
					<img src={searchIcon} alt="searchIcon" />
				</div>
				<input
					type="text"
					className="search-input"
					placeholder="item name "
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</div>

			<div className="header-items">
				<p>Drops</p>
				<p>Marketplace</p>
				<p>Create</p>
			</div>

			<div className="header-actions">
				<div className="theme-switch">
					<img src={ThemeSwitchIcon} alt="theme switch" />
				</div>

				<div className="login-button">GET IN</div>
			</div>
		</div>
	);
};

export default Header;
