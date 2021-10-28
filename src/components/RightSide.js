import React from "react";
import GroupConversations from "./GroupConversations";
import Contacts from "./Contacts";
import Sponsored from "./Sponsored";
import RenderList from "./RenderList";
import NoPhoto from '../assets/no-photo.png'
import GroupPhoto from '../assets/facebook-logo.svg'
import ProfilePhoto from '../assets/juan-photo.jpg'
import RenderGroupConversationsList from "./RenderGroupConversationsList";

const RightSide = () => {
    const contacts = [
        {
            name: "Briony Rich", 
            picture: `${ProfilePhoto}`
        },
        {
            name: "Camron Fuentes", 
            picture: `${ProfilePhoto}`
        },
        {
            name: "Tate Huang", 
            picture: `${NoPhoto}`
        },
        {
            name: "Becky Beard", 
            picture: `${ProfilePhoto}`
        },
        {
            name: "Adriana Hook", 
            picture: `${NoPhoto}`
        },
    ];

    const groupConversations = [
        {
            name: 'English Class', 
            picture: `${GroupPhoto}`
        }
    ];
    
    return (
        <aside className="right-side">
            {/* <Groups /> */}
            <Sponsored title="Sponsored" />
            <hr className="hr" />
            <Contacts title="Contacts">
                <RenderList list={contacts} isOnline="1" />
            </Contacts>
            <hr className="hr" />
            <GroupConversations title="Group Conversations">
                <RenderGroupConversationsList list={groupConversations} />
            </GroupConversations>
        </aside>
    );
};

export default RightSide;