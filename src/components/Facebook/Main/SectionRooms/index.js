import React from "react";
import { ImageProfile } from "../../../../atoms/image";
import { contacts } from "../../../Data/DataContacts";
import { camera_video } from "../../../Data/DataIcons";
import "./style.css";

const SectionRooms = (_) => (
  <section className="box__main room">
    <header className="room__header">
      <img
        className="page__icon-main"
        src={camera_video["url"]}
        alt={camera_video["desc"]}
        loading="lazy"
      />
      <p className="sub-title-text room__header-title">Rooms</p>
      <a className="room__header-link" href="#home">
        Create
      </a>
    </header>
    <div className="div-images__section-rooms">
      {contacts.map(({ profile, name, key }) => (
        <div className="profile-image__container" key={key}>
          <ImageProfile profile={profile} name={name} />
        </div>
      ))}
    </div>
  </section>
);

export default SectionRooms;
