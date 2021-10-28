import React from "react";
import HistoryPhoto from "./../assets/picture-1.jpeg";
import ProfilePhoto from "./../assets/juan-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
    const stories = [
        {
            name: "Harlan Henderson"
        }, 
        {
            name: "Jarvis Dickson"
        }, 
        {
            name: "Iyla Phillips"
        }, 
        {
            name: "Tamar Cross"
        }, 
    ];

    return (
        <div className="carousel">
            <div className="carousel__item create-story">
                <div>
                    <img src={ProfilePhoto} />
                </div>
                <div className="create-story__title">
                    Create<br />Story
                    <div className="create-story__add">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
            {
                stories.map(({ name }) => (
                    <div className="carousel__item">
                        <div>
                            <img className="wh-40 carousel-item__profile-photo" src={ProfilePhoto} />
                            <div className="carousel-item__profile-name">{name}</div>
                        </div>
                        <img src={HistoryPhoto} />
                    </div>
                ))
            }
            <div className="carousel-next">
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
    );
};

export default Carousel;