import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { ImageProfile } from "../../../../atoms/image";

function Publication({ name, profile, ago, message, photo }) {
  const [state, setState] = useState("loading");

  const handlePicture = function (e) {
    setState("success");
    e.target.style.display = "block";
  };
  const handlePictureError = function () {
    setState("error");
  };

  const renderMessage = () => {
    switch (state) {
      case "error":
        return <span>Not found image...</span>;
      case "loading":
        return <AiOutlineLoading className="load_icon" />;
      default:
        break;
    }
  };
  return (
    <article className="box__main publication">
      <header className="publication__header">
        <div className="profile-image__container">
          <ImageProfile profile={profile} name={name} />
        </div>
        <div className="publication__header-details">
          <a
            className="sub-title-text publication__header-details--link"
            href="#home"
          >
            {name}
          </a>
          <span className="publication__header-details--hour">{ago} h</span>
        </div>
        <a className="publication__header-more" href="/">
          ...
        </a>
      </header>
      <p className="publication__text">
        {message.length > 0 ? message : "Publico"}
      </p>

      <div className="publication__image-container">
        <img
          src={photo}
          className="publication__image"
          alt="publication"
          loading="lazy"
          onLoad={handlePicture}
          onError={handlePictureError}
        />
        {renderMessage()}
      </div>
      <div className="publication__reactions">
        <span className="publication__reaction sub-title-text">Like</span>
        <span className="publication__reaction sub-title-text">comment</span>
        <span className="publication__reaction sub-title-text">Share</span>
      </div>
    </article>
  );
}

export default Publication;
