import { faCamera, faComment, faGlobeAmericas, faHeart, faLaughSquint, faShare, faSmile, faStickyNote, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfilePhoto from "./../assets/juan-photo.jpg";
import PostPhoto from "./../assets/post-picture-1.jpeg";

const Post = ({ reactions, comments, shares }) => {
    return (
        <div className="post feed-card">
            <div className="post-top card__section">
                <div className="post-top-left">
                    <div className="post-top-left__picture">
                        <img src={ProfilePhoto} className="wh-40" alt="Profile photo" />
                    </div>
                    <div>
                        <div className="post-username">Juan Manuel</div>
                        <div className="text-format-2">16h · <FontAwesomeIcon icon={faGlobeAmericas} /></div>
                    </div>
                </div>
                <div className="post-more">
                    ...
                </div>
            </div>
            <div className="card__section">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <img src={PostPhoto} alt="Post picture" className="post__picture" />
            <div className="post-interactions card__section text-format-1">
                <div>
                    <FontAwesomeIcon className="post-interactions__icon" icon={faThumbsUp} color="#0072e4" />
                    <FontAwesomeIcon className="post-interactions__icon" icon={faHeart} color="#fa5872" />
                    <FontAwesomeIcon className="post-interactions__icon" icon={faLaughSquint} color="#ffca48" />
                    <span>{reactions}</span>
                </div>
                <div>
                    <span className="text-hover-underline">{comments} Comments</span> <span className="text-hover-underline">{shares} Shares</span>
                </div>
            </div>
            <hr className="hr" />
            <div className="post-actions card__section text-format-1">
                <div>
                    <FontAwesomeIcon className="post-actions__icon" icon={faThumbsUp} />
                    Like
                </div>
                <div>
                    <FontAwesomeIcon className="post-actions__icon" icon={faComment} />
                    Comment
                </div>
                <div>
                    <FontAwesomeIcon className="post-actions__icon" icon={faShare} />
                    Share
                </div>
            </div>
            <hr className="hr" />
            <div className="post__new-comment card__section">
                <img src={ProfilePhoto} alt="Profile photo" className="wh-32" />
                <div className="post-write-comment">
                    <input type="text" placeholder="Write a comment" className="post-write-comment__input" />
                    <div className="write-comment__actions text-format-1">
                        <FontAwesomeIcon className="write-comment__buttons" icon={faSmile} />
                        <FontAwesomeIcon className="write-comment__buttons" icon={faCamera} />
                        <FontAwesomeIcon className="write-comment__buttons" icon={faStickyNote} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;