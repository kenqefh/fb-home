import { contacts } from './DataContacts'

const data_stories = contacts.filter(contact => contact['story'] != null)

export {
    data_stories
}