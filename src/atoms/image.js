import React, { useLayoutEffect, useRef, useState } from "react";
import { extractAbbreviate } from "./../utils/strings";
import { AiOutlineLoading } from "react-icons/ai";
import "./image.css";

function ImageProfile({ profile, name }) {
  const [state, setState] = useState("loading");
  const profileImage = useRef();

  useLayoutEffect(() => {
    profileImage.current.style.display = "none";
  }, []);

  const handleLoadProfile = function () {
    setTimeout(() => {
      setState("success");
      profileImage.current.style.display = "block";
    }, 420);
  };

  const handleLoadProfileError = function () {
    setState("error");
  };

  const renderMessage = (_) => {
    switch (state) {
      case "error":
        return <span>{extractAbbreviate(name)}</span>;
      case "loading":
        return <AiOutlineLoading className="load_icon" />;
      default:
        break;
    }
  };

  return (
    <>
      <img
        ref={profileImage}
        src={profile}
        className="profile-image"
        alt=""
        loading="lazy"
        onLoad={handleLoadProfile}
        onError={handleLoadProfileError}
      />
      {renderMessage()}
    </>
  );
}

export { ImageProfile };
