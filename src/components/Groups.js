import React from "react";
import DogPicture from "../assets/dog.jpeg"
import GroupIcon from "../assets/group-icon.png"

const Groups = () => (
    <div>
        <div>
            <img src={GroupIcon} /> Groups <span>&#8226; Suggested for You</span>
        </div>
        <img src={DogPicture} />
        <div>Adopciones San Antonio de Prado.</div>
        <span>1,2 mil members &#8226; 10 posts a day</span>
        <div>
            <button>Join Group</button>
        </div>
    </div>
);

export default Groups;