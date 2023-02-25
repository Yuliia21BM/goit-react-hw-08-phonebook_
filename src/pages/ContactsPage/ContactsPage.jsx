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
  Box,
  Flex,
  // useColorMode,
} from '@chakra-ui/react';

import { Container } from 'components/utiles';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ModalWrap } from 'components/ModalWrap/ModalWrap';
import { TbUserPlus } from 'react-icons/tb';

const modalRoot = document.querySelector('#modal-root');

const ContactsPage = () => {
  const { error, isLoading } = useFetchContactsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container>
        <Box p="10px" position="relative">
          <Button
            variant="outline"
            position={'absolute'}
            top="20px"
            right={'95px'}
            colorScheme="teal"
            onClick={onOpen}
            size="lg"
          >
            <TbUserPlus enableBackground={'teal'} size="1.3em" />
          </Button>
          <Flex justifyContent={'center'}>
            <Filter />
          </Flex>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
          <ToastContainer autoClose={3000} />
        </Box>
        {createPortal(
          <ModalWrap isOpen={isOpen} onClose={onClose}>
            <ContactForm onClose={onClose} />
          </ModalWrap>,
          modalRoot
        )}
      </Container>
    </>
  );
};

export default ContactsPage;
