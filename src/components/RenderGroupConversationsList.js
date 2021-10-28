import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../components/Card";

const RenderGroupConversationsList = ({ list }) => {
    return (
        <ul className="ul">
            {list.map(({ name, picture }, i) => 
                <Card title={name} picture={picture} key={i}/>
            )}
            <li className="card py-8">
                <div className="circle-icon wh-34 mr-7">
                    <FontAwesomeIcon icon={faPlus} />
                </div> Create New Group</li>
        </ul>
    );
};

export default RenderGroupConversationsList;