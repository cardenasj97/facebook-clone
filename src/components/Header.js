import React from "react";
import Logo from '../assets/facebook-logo.svg'
import SearchBar from './SearchBar'
import ProfilePhoto from '../assets/juan-photo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComment, faSortDown, faTh } from "@fortawesome/free-solid-svg-icons";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const Header = () => {
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div>
                    <img src={Logo} className="header__icon logo" />
                    <SearchBar />
                </div>
                <div className="navbar__center">
                    <div className="hover-1 selected">
                        <HomeIcon className="header-home-icon" />
                    </div>
                    <div className="hover-1">
                        <div className="navbar-icon-container">
                            <OndemandVideoOutlinedIcon />
                            <div className="notification-text-red">6</div>
                        </div>
                    </div>
                    <div className="hover-1">
                        <StorefrontOutlinedIcon />
                    </div>
                    <div className="hover-1">
                        <div className="navbar-icon-container">
                            <GroupsOutlinedIcon />
                            <div className="notification-text-red">9+</div>
                        </div>
                    </div>
                    <div className="hover-1">
                        <SportsEsportsOutlinedIcon />
                    </div>
                </div>
                <div className="navbar__right">
                    <div className="card profile">
                        <img src={ProfilePhoto} className="header__icon" />
                        Juan
                    </div>
                    <div className="header__icon">
                        <FontAwesomeIcon icon={faTh} />
                    </div>
                    <div className="header__icon">
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                    <div className="header__icon">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="header__icon">
                        <FontAwesomeIcon icon={faSortDown} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;