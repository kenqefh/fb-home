import React from 'react'
import List from '../List'
import { items_nav } from '../../Data/DataNav'
import './style.css'

const Nav = _ => (
    <nav className='nav'>
        <ul className='container-items__nav'>
            {
                items_nav.map(({ icon, title, url, key, style }) => (
                    <List
                        icon={icon}
                        title={title}
                        url={url}
                        key={key}
                        style={style}
                    />
                ))
            }
        </ul>
    </nav>
)

export default Nav