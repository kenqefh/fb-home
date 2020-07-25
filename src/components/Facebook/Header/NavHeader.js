import React from 'react'

const NavHeader = ({ to_path, url, alt }) => (
    <li><a className='nav-item-link' href={to_path}><img src={url} alt={alt} /></a></li>
)

export default NavHeader