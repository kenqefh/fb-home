import React from 'react'

const StoryPreview = ({ profile, story, name }) => (
    <a className='story-container' href='#home'>
        <div className='profile-image__container profile__story'>
            <img src={profile} className='profile-image' alt={name} />
        </div>
        <img src={story} className='img__story' alt={name} />
        <p className='sub-title-text name-friend__story'>{name}</p>
    </a>
)

export default StoryPreview