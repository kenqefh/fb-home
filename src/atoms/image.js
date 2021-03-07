import React, { useLayoutEffect, useRef, useState } from "react";
import { extractAbbreviate } from "./../utils/strings";

function ImageProfile({ profile, name }) {
  const [loading, setLoading] = useState(true);
  const profileImage = useRef();

  useLayoutEffect(() => {
    profileImage.current.style.display = "none";
  }, []);

  const handleLoadProfile = function () {
    setLoading(false);
    profileImage.current.style.display = "block";
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
      />
      {loading && <span>{extractAbbreviate(name)}</span>}
    </>
  );
}

export { ImageProfile };
