import React from 'react'
import './style.css'

const List = ({ icon, title, url = '#home', style = 'profile-image' }) => (
    <li><a className='a__list' href={url}><img className={style} src={icon} alt='' />{title}</a></li>
)

export default List