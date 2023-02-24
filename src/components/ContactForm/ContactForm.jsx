import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';

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
  const [addContact] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  const formSubmitHandler = ({ name, number }, { resetForm }) => {
    const invalidName = data.find(state => state.name === name);

    if (invalidName) {
      Notification(name);
      resetForm();
      return;
    }
    addContact({ name, number });
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
                        type="text"
                        placeholder="John Doe"
                        _placeholder={{ opacity: 1, color: 'teal.700' }}
                        pattern={patternName}
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
                        type="telephone"
                        placeholder="0960000000"
                        _placeholder={{ opacity: 1, color: 'teal.700' }}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
