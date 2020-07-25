import React from 'react'
import Options from './Options'
import { profile_image } from '../../../Data/DataProfile'
import { data_option_create_publication } from '../../../Data/DataOptionCreatePublication'
import './style.css'

const SectionCreatePublication = _ => (
    <section className='box__main section-create-publication' >
        <form className='form__create-publication'>
            <img className='profile-image' src={profile_image} alt='' />
            <input className='input-text input-form__create-publication' type='text' placeholder="What's on your mind, Elvis?" />
        </form>
        {
            data_option_create_publication.map(({ url, desc, key }) => (
                <Options
                    url={url}
                    desc={desc}
                    key={key}
                />
            ))
        }
    </section>
)

export default SectionCreatePublication