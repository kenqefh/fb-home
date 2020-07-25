import React from 'react'
import StoryPreview from './StoryPreview'
import { profile_image } from '../../../Data/DataProfile'
import { data_stories } from '../../../Data/DataStories'
import './style.css'

const SectionStory = _ => (
    <>
        <section className='section-create-story'>
            <a className='create-story-container story-container' href='#home' >
                <img className='img__create-story img__story' src={profile_image} alt='' />
                <p className='sub-title-text p__create-story'>Create a story</p>
            </a>
            {
                data_stories.map(({ profile, story, name, key }) => (
                    <StoryPreview
                        profile={profile}
                        story={story}
                        name={name}
                        key={key}
                    />
                ))
            }
        </section>
    </>
)

export default SectionStory