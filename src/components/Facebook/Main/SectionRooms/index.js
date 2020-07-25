import React from 'react'
import { contacts } from '../../../Data/DataContacts'
import { camera_video } from '../../../Data/DataIcons'
import './style.css'

const SectionRooms = _ => (
    <section className='box__main'>
        <header className='header__section-rooms'>
            <div>
                <img className='icon__create-pub' src={camera_video['url']} alt={camera_video['desc']} />
                <p className='sub-title-text p-header__section-rooms'>Rooms</p>
            </div>
            <a href='#home'>Create</a>
        </header>
        <div className='div-images__section-rooms'>
            {
                contacts.map(({ profile, name, key }) => (
                    <img className='profile-image'
                        src={profile}
                        alt={name} key={key}
                    />
                ))
            }
        </div>
    </section>
)

export default SectionRooms