import React from 'react'

const NavHeader = ({ to_path, url, alt, class_name = '' }) => (
    <li><a className={ 'nav-item-link ' + class_name} href={to_path}><img src={url} alt={alt} /></a></li>
)

export default NavHeader