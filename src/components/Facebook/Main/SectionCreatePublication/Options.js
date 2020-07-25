import React from 'react'

const Options = ({ url, desc }) => (
    <a href='#home' className='sub-title-text a__create-pub' >
        <img className='icon__create-pub' src={url} alt={desc} />
        <p>{desc}</p>
    </a>
)

export default Options