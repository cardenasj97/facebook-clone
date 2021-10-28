import React from "react";
import Header from "./Header";
import LeftSide from "./LeftSide";
import MiddleContent from "./MiddleContent";
import RightSide from "./RightSide";

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                {/* <div className="sub-container"> */}
                    <LeftSide />
                    <MiddleContent />
                    <RightSide />
                {/* </div> */}
            </div>
        </>
    );
};

export default App;