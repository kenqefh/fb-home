import React from 'react'

const Publication = ({ name, profile, ago, message, photo }) => (
    <article className='box__main publication'>
        <header className='publication__header'>
            <div className='profile-image__container'>
                <img className='profile-image' src={profile} alt={name} />
            </div>
            <div className='publication__header-details'>
                <a className='sub-title-text publication__header-details--link' href='#home'>{name}</a>
                <span className='publication__header-details--hour'>{ago} h</span>
            </div>
            <a className='publication__header-more' href='/'>...</a>
        </header>
        <p className='publication__text'>{(message.length > 0) ? message : 'Publico'}</p>

        <div className='publication__image-container'>
            <img src={photo} className='publication__image' alt='publication' />
        </div>
        <div className='publication__reactions'>
            <span className='publication__reaction sub-title-text'>Like</span>
            <span className='publication__reaction sub-title-text'>comment</span>
            <span className='publication__reaction sub-title-text'>Share</span>
        </div>
    </article>
)

export default Publication