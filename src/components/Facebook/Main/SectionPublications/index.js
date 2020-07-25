import React from 'react'
import { gen_publications } from '../../../Data/DataPublications'
import Publication from './Publication'
import './style.css'

const SectionPublications = _ => (
    <section>
        {
            gen_publications(25).map(({ name, profile, ago, message, photo, key }) => (
                <Publication
                    name={name}
                    profile={profile}
                    ago={ago}
                    message={message}
                    photo={photo}
                    key={key}
                />
            ))
        }
    </section>
)

export default SectionPublications