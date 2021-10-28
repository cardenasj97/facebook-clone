import React, { useState } from "react";
import Card from "./Card";

const RenderList = ({ list, isOnline = 0 }) => {
    const toggleView = (state) => {
        setShowMore(state);
        console.log(state);
    }

    return (
        <ul className="ul">
            {list.map(({ name, picture }, i) => 
                <Card title={name} picture={picture} key={i} isOnline={isOnline} />
            )}
        </ul>
    )
};

export default RenderList;