import React from "react";
import { ImageProfile } from "../../../atoms/image";
import "./style.css";

const List = ({ icon, title, url = "/", style = "profile-image" }) => (
  <li>
    <a className="a__list" href={url}>
      <div className="profile-image__container">
        <ImageProfile profile={icon} name={title} />
      </div>
      {title}
    </a>
  </li>
);

export default List;
