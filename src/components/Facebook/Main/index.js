import React from 'react'
import SectionStory from './SectionStory'
import SectionCreatePublication from './SectionCreatePublication'
import SectionPublications from './SectionPublications'
import SectionRooms from './SectionRooms'

import './style.css'

const Main = _ => (
    <main className='main' id='home'>
        <SectionStory />
        <SectionCreatePublication />
        <SectionRooms />
        <SectionPublications />
    </main>
)

export default Main