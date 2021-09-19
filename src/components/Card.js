import React, { useState } from "react";

// styles
import "./card.css";

// images
import Lodo from "../image/logo.jpg";
import Dot from "../image/dot.png";
import Bg from "../image/bg.jpg";
import Heart from "../image/heart.png";
import HeartRed from "../image/heart_red.png";
import Comment from "../image/comment.png";
import Share from "../image/share.png";
import Bookmark from "../image/bookmark.png";
import User from "../image/user.jpg";

const Card = () => {
  const [heart, setHeart] = useState(Heart);
  const [likes, setLikes] = useState(3478);

  const likeButton = () => {
    if (heart === Heart) {
      setLikes(likes + 1);
      setHeart(HeartRed);
    } else {
      setLikes(likes - 1);
      setHeart(Heart);
    }
  };

  return (
    <>
      <div className="card">
        <div className="top">
          <div className="userDetails">
            <div className="profile_img">
              <img src={Lodo} alt="logo" className="cover" />
            </div>
            <h3>
              harpinder_Singh <br />
              <span>Mohali, India</span>
            </h3>
          </div>
          <div className="">
            <img src={Dot} alt="dot" className="dot" />
          </div>
        </div>
        <div className="imgBx">
          <img src={Bg} alt="bg" className="cover" />
        </div>
        <div className="actionsBtns">
          <div className="left">
            <img
              onClick={likeButton}
              src={heart}
              alt="heart"
              className="heart"
            />
            <img src={Comment} alt="comment" />
            <img src={Share} alt="share" />
          </div>
          <div className="right">
            <img src={Bookmark} alt="bookmark" />
          </div>
        </div>

        <h4 className="likes">{likes} likes</h4>
        <h4 className="message">
          {" "}
          <b>harpinder_singh</b> Thanks for your love and supports{" "}
          <span>#cards</span>
          <span> #html</span>
          <span> #css</span>
        </h4>
        <h4 className="comments">View all 245 comments</h4>

        <div className="addComments">
          <div className="userImg">
            <img src={User} alt="user" className="cover" />
          </div>
          <input type="text" className="text" placeholder="Add a comment..." />
        </div>

        <h5 className="postTime">4 hours ago</h5>
      </div>
    </>
  );
};

export default Card;
