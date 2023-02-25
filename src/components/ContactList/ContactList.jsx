import { useSelector } from 'react-redux';
import { selectTextFilter } from '../redux/selectors';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'components/redux/contactsApi';

import { RiEditLine } from 'react-icons/ri';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

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
    <Box p="10px" pt="40px">
      <Flex gap={'20px'} flexDirection="column">
        {visibleContacts?.map(({ id, name, number }) => {
          return (
            <Flex key={id} alignItems="center" justifyContent={'space-between'}>
              <Avatar name={name} colorScheme="twitter" size="md" />
              <Text fontSize="xl" as="cite">
                {' '}
                {name}:
              </Text>
              <Text fontSize="xl"> {number}</Text>
              <Flex gap={'20px'}>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </Button>
                <Button variant="outline" colorScheme="yellow">
                  <RiEditLine />
                </Button>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};
