import React from 'react'

const Options = ({ url, desc }) => (
    <a href='#home' className='sub-title-text create-publication__option' >
        <img className='page__icon-main' src={url} alt={desc} />
        <p>{desc}</p>
    </a>
)

export default Options