import React, { useEffect, useState } from "react";
import Card from "./Card";
import Logo from '../assets/facebook-logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const RenderCategoryList = ({ list }) => {
    const fixedItemsToShow = 5;

    const [seeMoreValue, setSeeMore] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(fixedItemsToShow);
    const renderedList = list;

    const seeMore = () => {
        if (!seeMoreValue) {
            setSeeMore(true);
            setItemsToShow(renderedList.length + 1);
        } else {
            setSeeMore(false);
            setItemsToShow(fixedItemsToShow);
        }
    };

    const ShowMoreCard = () => (
        <li className="card py-8" onClick={() => seeMore()}>
            <div className="category-list__see-more">
                <FontAwesomeIcon icon={faChevronDown} className="header__icon" />
            </div>
            {!seeMoreValue ? <span>See More</span> : <span>See Less</span>}
        </li> 
    );

    console.log(renderedList.length)

    return (
        <ul className="ul">
            {renderedList.slice(0, itemsToShow).map(({ name, picture, notifications }, i) => 
                <Card title={name} picture={picture} key={i} notifications={notifications} />
            )}
            {renderedList.length > fixedItemsToShow ? <ShowMoreCard /> : null}
        </ul>
    );
};

export default RenderCategoryList;