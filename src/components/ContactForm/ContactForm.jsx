import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
  Heading,
} from '@chakra-ui/react';

import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'components/redux/contactsApi';

import { Notification, patternName } from 'components/utiles';

const initialValues = { name: '', number: '' };

const nameId = nanoid();
const numberId = nanoid();

export const ContactForm = ({ onClose }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  const formSubmitHandler = (_, { resetForm }) => {
    console.log(newName, newNumber);
    const invalidName = data.find(state => state.name === newName);

    if (invalidName) {
      Notification(newName);
      resetForm();
      return;
    }
    addContact({ name: newName, number: newNumber });
    onClose();
    resetForm();
  };
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Add new contact</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <Formik initialValues={initialValues} onSubmit={formSubmitHandler}>
            {props => (
              <Form>
                <Field name="name" id={nameId}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Name</FormLabel>
                      <Input
                        {...field}
                        value={newName}
                        type="text"
                        placeholder="John Doe"
                        _placeholder={{ opacity: 1, color: 'teal.700' }}
                        pattern={patternName}
                        onChange={e => setNewName(e.target.value)}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="number" patern={patternName} id={numberId}>
                  {({ field, form }) => (
                    <FormControl
                      mt={6}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Nunber</FormLabel>
                      <Input
                        {...field}
                        value={newNumber}
                        type="telephone"
                        placeholder="0960000000"
                        _placeholder={{ opacity: 1, color: 'teal.700' }}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        onChange={e => setNewNumber(e.target.value)}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  type="submit"
                  colorScheme="yellow"
                  variant="outline"
                  width="full"
                  mt={6}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Flex>
  );
};
