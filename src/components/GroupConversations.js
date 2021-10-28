import React from "react";

const GroupConversations = ({ children, title }) => (
    <div className="right-side__section">
        <h2>{title}</h2>
        {children}
    </div>
);

export default GroupConversations;