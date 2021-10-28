import React from "react";

const Contacts = ({ children, title }) => (
    <div className="right-side__section">
        <h2>{title}</h2>
        {children}
    </div>
);

export default Contacts;