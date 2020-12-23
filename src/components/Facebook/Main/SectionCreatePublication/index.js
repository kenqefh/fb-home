import React from 'react'
import Options from './Options'
import { profile_image } from '../../../Data/DataProfile'
import { data_option_create_publication } from '../../../Data/DataOptionCreatePublication'
import './style.css'

const SectionCreatePublication = _ => (
    <section className='box__main create-publication' >
        <form className='create-publication__form'>
            <div className='profile-image__container'>
                <img className='profile-image' src={profile_image} alt='' />
            </div>
            <input className='input-text create-publication__form-input' type='text' placeholder="What's on your mind, Kenq?" />
        </form>
        <div className='create-publication__options'>
            {
                data_option_create_publication.map(({ url, desc, key }) => (
                    <Options
                        url={url}
                        desc={desc}
                        key={key}
                    />
                ))
            }
        </div>
    </section>
)

export default SectionCreatePublication