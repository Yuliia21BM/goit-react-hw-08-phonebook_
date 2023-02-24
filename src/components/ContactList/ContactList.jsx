import { useSelector } from 'react-redux';
import { selectTextFilter } from '../redux/selectors';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'components/redux/contactsApi';

import { ContactsList, ContactItem, DeleteBtn } from './ContactList.styled';

const getFilteredContacts = (contacts, filterValue) => {
  if (filterValue === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};

export const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector(selectTextFilter);

  const visibleContacts = getFilteredContacts(data, filterValue);

  return (
    <ContactsList>
      {visibleContacts?.map(
        ({ id, name, number, avatar, email, description }) => {
          console.log('name', name);
          console.log('number', number);
          console.log('avatar', avatar);
          console.log('email', email);
          console.log('description', description);
          return (
            <ContactItem key={id}>
              <span>&#128241;</span>
              {name} : {number}
              <DeleteBtn onClick={() => deleteContact(id)}>Delete</DeleteBtn>
            </ContactItem>
          );
        }
      )}
    </ContactsList>
  );
};
