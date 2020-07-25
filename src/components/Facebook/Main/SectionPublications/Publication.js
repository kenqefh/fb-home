import React from 'react'

const Publication = ({ name, profile, ago, message, photo }) => (
    <article className='box__main publication-container'>
        <header>
            <div className='div__header__publication'>
                <img className='profile-image img__header-detaills__publication' src={profile} alt={name} />
                <div className='div__header-detaills__publication'>
                    <a className='sub-title-text' href='#home'>{name}</a>
                    <span>{ago} h</span>
                </div>
            </div>
            <a className='link-more__publication' href='#home'>...</a>
        </header>
        <p>{(message.length > 0) ? message : 'Publico'}</p>

        <div className='div-image__publications'>
            <img src={photo} className='image-publication' alt='publicacion' />
        </div>
        <div className='reactions__publication'>
            <span className='sub-title-text'>Like</span>
            <span className='sub-title-text'>comment</span>
            <span className='sub-title-text'>Share</span>
        </div>
    </article>
)

export default Publication