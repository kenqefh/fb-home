import React from 'react'
import './style.css'
import { contacts } from '../../Data/DataContacts'
import List from '../List'

const Aside = _ => (
    <aside className='aside'>
        <section className='contacts-section__aside'>
            <h2 className='sub-title-text'>Contacts</h2>
            <ul>
                {
                    contacts.map(({ profile, name, key }) => (
                        <List
                            icon={profile}
                            title={name}
                            key={key}
                        />
                    ))
                }

            </ul>
        </section>
    </aside>
)

export default Aside