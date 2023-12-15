import { ContactItem } from 'components/ContactItem/ContactItem';

export const Contacts = ({ contacts, onClickDelBtn }) => (
  <ul>
    {contacts &&
      contacts.map(contact => (
        <ContactItem contact={contact} onClickDelBtn={onClickDelBtn} />
      ))}
  </ul>
);
