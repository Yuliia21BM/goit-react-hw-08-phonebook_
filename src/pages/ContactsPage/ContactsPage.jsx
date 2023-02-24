import { ToastContainer } from 'react-toastify';
import { useFetchContactsQuery } from 'components/redux/contactsApi';
import { createPortal } from 'react-dom';
import {
  useDisclosure,
  Button,
  // ModalHeader,
  // Flex,
  // Spacer,
  // Link,
  // Box,
  // useColorMode,
} from '@chakra-ui/react';

import { Container } from 'components/utiles';
import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ModalWrap } from 'components/ModalWrap/ModalWrap';

const ContactsPage = () => {
  const { error, isLoading } = useFetchContactsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container>
        <Box p="10px">
          <Button colorScheme="teal" onClick={onOpen}>
            Add
          </Button>
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
          <ToastContainer autoClose={3000} />
        </Box>
        {createPortal(
          <ModalWrap isOpen={isOpen} onClose={onClose}>
            <ContactForm onClose={onClose} />
          </ModalWrap>,
          document.body
        )}
      </Container>
    </>
  );
};

export default ContactsPage;
