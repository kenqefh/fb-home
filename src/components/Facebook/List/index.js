import React from 'react'
import './style.css'

const List = ({ icon, title, url = '/', style = 'profile-image' }) => (
    <li>
        <a className='a__list' href={url}>
            <div className='profile-image__container'>
                <img className={style} src={icon} alt='' />
            </div>
            {title}
        </a>
    </li>
)

export default List