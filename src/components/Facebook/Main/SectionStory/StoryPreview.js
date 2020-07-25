import React from 'react'

const StoryPreview = ({ profile, story, name }) => (
    <a className='story-container' href='#home'>
        <img src={profile} className='profile-image profile__story' alt={name} />
        <img src={story} className='img__story' alt={name} />
        <p className='sub-title-text name-friend__story'>{name}</p>
    </a>
)

export default StoryPreview