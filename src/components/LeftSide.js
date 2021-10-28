import React from "react";
import Logo from '../assets/facebook-logo.svg';
import ProfilePhoto from '../assets/juan-photo.jpg';
import ShortcutPhoto1 from '../assets/texas-holdem.png';
import FriendsPhoto from '../assets/friends.png';
import MemoriesPhoto from '../assets/memories.png';
import AdActivityPhoto from '../assets/ad-activity.png';
import GroupsPhoto from '../assets/groups.png';
import MarketPlacePhoto from '../assets/marketplace.png';
import WatchPhoto from '../assets/watch.png';
import SavedPhoto from '../assets/saved.png';
import PagesPhoto from '../assets/pages.png';
import EventsPhoto from '../assets/events.png';
import JobsPhoto from '../assets/jobs.png';
import AdsPhoto from '../assets/ads.png';
import BloodDonationsPhoto from '../assets/blood-donations.png';
import CampusPhoto from '../assets/campus.png';
import RenderList from "./RenderList";
import Categories from "./Categories";
import RenderCategoryList from "./RenderCategoryList";
import YourShortcuts from "./YourShortcuts";

const LeftSide = () => {
    const categories = [
        {
            name: 'Juan Cárdenas', 
            picture: `${ProfilePhoto}`,
            notifications: 0
        }, {
            name: 'Friends', 
            picture: `${FriendsPhoto}`,
            notifications: 2
        }, {
            name: 'Memories', 
            picture: `${MemoriesPhoto}`,
            notifications: 0
        }, {
            name: 'Recent Ad Activity', 
            picture: `${AdActivityPhoto}`,
            notifications: 0
        } ,  {
            name: 'Groups', 
            picture: `${GroupsPhoto}`,
            notifications: 5
        }, {
            name: 'Marketplace', 
            picture: `${MarketPlacePhoto}`,
            notifications: 0
        }, {
            name: 'Watch', 
            picture: `${WatchPhoto}`,
            notifications: 0
        }, 
        {
            name: 'Saved', 
            picture: `${SavedPhoto}`,
            notifications: 0
        }, {
            name: 'Pages', 
            picture: `${PagesPhoto}`,
            notifications: 0
        }, {
            name: 'Events', 
            picture: `${EventsPhoto}`,
            notifications: 0
        }, {
            name: 'Jobs', 
            picture: `${JobsPhoto}`,
            notifications: 0
        }, {
            name: 'Ads', 
            picture: `${AdsPhoto}`,
            notifications: 0
        }, {
            name: 'Blood donations', 
            picture: `${BloodDonationsPhoto}`,
            notifications: 0
        }, {
            name: 'Campus', 
            picture: `${CampusPhoto}`,
            notifications: 0
        }
    ];

    const yourShortcuts = [
        {
            name: 'Texas HoldEm Poker', 
            picture: `${ShortcutPhoto1}`,
            notifications: 0
        }
    ];

    return (
        <aside className="left-side">
            <Categories>
                <RenderCategoryList list={categories} />
            </Categories>
            <hr className="hr" />
            <YourShortcuts title="Your Shortcuts">
                <RenderList list={yourShortcuts} />
            </YourShortcuts>
            <footer className="footer">
                Privacy · Terms · Advertising · Ad Choices · Cookies · Facebook © 2021
            </footer>
        </aside>
    );
};

export default LeftSide;