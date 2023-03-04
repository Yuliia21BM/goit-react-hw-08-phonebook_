import { useSelector } from 'react-redux';
import { selectTextFilter } from '../redux/selectors';
import { useFetchContactsQuery } from 'components/redux/contactsApi';
import GiffSadDog from '../../images/sad-dog.gif';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ContactItem } from 'components/ContactItem/ContactItem';

const getFilteredContacts = (contacts, filterValue) => {
  if (filterValue === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};

export const ContactList = ({ onEdit }) => {
  const { data } = useFetchContactsQuery();
  const filterValue = useSelector(selectTextFilter);

  const visibleContacts = getFilteredContacts(data, filterValue);

  return (
    <Box p="10px" pt="40px">
      <Flex gap={'20px'} flexDirection="column">
        {visibleContacts?.length === 0 ? (
          <>
            <Text textAlign="center" as="cite" size="xl">
              There are no contacts here yet
            </Text>
            <Image
              src={GiffSadDog}
              alt="Sad dog"
              w={'500px'}
              alignSelf="center"
            />
          </>
        ) : (
          visibleContacts?.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))
        )}
      </Flex>
    </Box>
  );
};
