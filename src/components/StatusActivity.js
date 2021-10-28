import { faGrin, faPhotoVideo, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfilePhoto from "./../assets/juan-photo.jpg";

const StatusActivity = () => {
    return (
        <div className="status-activity feed-card">
            <div className="status-activity-top card__section">
                <img src={ProfilePhoto} alt="Profile photo" className="wh-40" />
                <input type="text" placeholder="What's on your mind, Juan?" className="status-bar" />
            </div>
            <hr className="hr" />
            <div className="status-activity-bottom card__section">
                <div className="text-format-1">
                    <FontAwesomeIcon className="status-activity__icon" icon={faVideo} color="#f2425e" />
                    Live Video</div>
                <div className="text-format-1">
                    <FontAwesomeIcon className="status-activity__icon" icon={faPhotoVideo} color="#44bd62" />
                    Photo/Video</div>
                <div className="text-format-1">
                    <FontAwesomeIcon className="status-activity__icon" icon={faGrin} color="#f7b828" />
                    Feeling/Activity</div>
            </div>
        </div>
    );
};

export default StatusActivity;