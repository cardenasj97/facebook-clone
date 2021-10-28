import React from "react";
import Carousel from "./Carousel";
import CreateRoom from "./CreateRoom";
import Post from "./Post";
import StatusActivity from "./StatusActivity";

const MiddleContent = () => (
    <div className="middle-container">
        <Carousel />
        <StatusActivity />
        <CreateRoom />
        <Post reactions={70} comments={37} shares={3} />
    </div>
);

export default MiddleContent;