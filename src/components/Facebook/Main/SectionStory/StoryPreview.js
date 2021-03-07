import React from "react";
import { ImageProfile } from "./../../../../atoms/image";

function StoryPreview({ profile, story, name }) {
  return (
    <div className="story-container" href="#home">
      <div className="profile-image__container profile__story">
        <ImageProfile profile={profile} name={name} />
      </div>
      <img src={story} className="img__story" alt="" loading="lazy" />
      <p className="sub-title-text name-friend__story">{name}</p>
    </div>
  );
}

export default StoryPreview;
