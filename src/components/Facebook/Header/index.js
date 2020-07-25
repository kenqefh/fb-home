import React from 'react'
import NavHeader from './NavHeader'
import './style.css'

const icon_fb = 'icons/logo-fb-64.ico'
const nav_list = [
    {
        to_path: '#home',
        url: 'icons/header/home-64.ico',
        alt: 'home',
        key: 'home'
    },
    {
        to_path: '#watch',
        url: 'icons/header/watch-64.ico',
        alt: 'watch',
        key: 'watch'
    },
    {
        to_path: '#marketplace',
        url: 'icons/header/marketplace-64.ico',
        alt: 'marketplace',
        key: 'marketplace'
    },
    {
        to_path: '#groups',
        url: 'icons/header/groups-64.png',
        alt: 'groups',
        key: 'groups'
    },
    {
        to_path: '#gaming',
        url: 'icons/header/gaming.png',
        alt: 'gaming',
        key: 'gaming'
    }
]

const profile_photo = 'images/profile.jpg'

const plus_icon = 'icons/header/plus-64.png'
const messenger_icon = 'icons/header/messenger-64.png'
const notification_icon = 'icons/header/notifications-64.png'
const arrow_down_icon = 'icons/header/arrow-down.png'

const Header = _ => (
    <header className='header'>
        <div className='container-logo'>
            <a href='#home'>
                <img src={icon_fb} alt='fb icon' />
            </a>
            <form className='form-header'>
                <i className='icon-search' />
                <input className='input-text' type='text' placeholder='Search Facebook' />
            </form>
        </div>
        <nav>
            <ul className='nav-items'>
                {
                    nav_list.map(({ to_path, url, alt, key }) => (
                        <NavHeader to_path={to_path} url={url} alt={alt} key={key} />
                    ))
                }
            </ul>
        </nav>
        <div className='menu__header'>
            <div className='div-profile__menu__header'>
                <img alt='img' className='img-profile__menu__header' src={profile_photo} />
                Frank
            </div>
            <div><img alt='img' src={plus_icon} /></div>
            <div><img alt='img' src={messenger_icon} /></div>
            <div><img alt='img' src={notification_icon} /></div>
            <div><img alt='img' src={arrow_down_icon} /></div>
        </div>
    </header>
)

export default Header