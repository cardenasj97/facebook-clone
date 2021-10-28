import React from "react";

const YourShortcuts = ({ children, title }) => (
    <div className="left-side__section">
        <h2>{title}</h2>
        {children}
    </div>
);

export default YourShortcuts;