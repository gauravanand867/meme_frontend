import React from "react";

import "./style.css";
const UserCard = (props) => {
  return (
    <div className="user-card">
      <img className="user-img" src={props.picUrl} alt="meme" />

      <span>{props.name}</span>

      <span>{props.caption}</span>
    </div>
  );
};

export default UserCard;
