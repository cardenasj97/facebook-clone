import { faAngleRight, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreMallDirectorySharp } from "@mui/icons-material";
import React from "react";
import ProfilePhoto from "./../assets/juan-photo.jpg";

const CreateRoom = () => {
    const friends = [
        {
            name: "Harlan Henderson"
        }, 
        {
            name: "Jarvis Dickson"
        }, 
        {
            name: "Iyla Phillips"
        }, 
        {
            name: "Harlan Henderson"
        }, 
        {
            name: "Jarvis Dickson"
        }, 
        {
            name: "Iyla Phillips"
        }, 
        {
            name: "Harlan Henderson"
        }, 
        {
            name: "Jarvis Dickson"
        }, 
        {
            name: "Iyla Phillips"
        }, 
    ];

    return (
        <div className="create-room feed-card">
            <div className="create-room__button">
                <FontAwesomeIcon className="create-room__icon" icon={faVideo} />
                <span>Create Room</span>
            </div>
            {
                friends.map(({ name }) => (
                    <div className="create-room__bubble">
                        <img src={ProfilePhoto} className="wh-40" alt="Friend profile photo" title={name} />
                    </div>
                ))
            }
            <div className="create-room-next">
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    );
};

export default CreateRoom;