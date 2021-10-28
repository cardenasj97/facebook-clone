import React from "react";

const Card = ({ title, picture, isOnline = null, notifications = null }) => (
    <li className="card py-8">
        {
            isOnline ? 
                <>
                    <div className="relative">
                        <img src={picture} className="circle-icon wh-36 mr-7" />
                        <div className="online-circle"></div>
                    </div>
                    <span>{title}</span>
                </>
                : notifications ? 
                <>
                    <img src={picture} className="circle-icon wh-36 mr-7" />
                    <div>
                        <div>{title}</div>
                        <div className="notification-text-blue">
                            <div className="notification-circle-blue"></div>    
                            {notifications} new
                        </div>
                    </div>
                </>
                :
                <>
                    <img src={picture} className="circle-icon wh-36 mr-7" />
                    <div>
                        <div>{title}</div>
                    </div>
                </>
        }
    </li>
);

export default Card;