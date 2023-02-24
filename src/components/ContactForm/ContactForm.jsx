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
  Select,
  Textarea,
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
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [avatar, setAvatar] = useState('default');
  const [description, setDescription] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  const formSubmitHandler = (_, { resetForm }) => {
    console.log(name, number);
    const invalidName = data.find(state => state.name === name);

    if (invalidName) {
      Notification(name);
      resetForm();
      return;
    }
    addContact({ name, number, email, avatar, description, birthday });
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
                        value={name}
                        type="text"
                        placeholder="John Doe"
                        _placeholder={{ opacity: 1, color: 'teal.700' }}
                        pattern={patternName}
                        onChange={e => setName(e.target.value)}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="number" patern={patternName} id={numberId}>
                  {({ field, form }) => (
                    <FormControl
                      mt={4}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Nunber</FormLabel>
                      <Input
                        {...field}
                        value={number}
                        type="telephone"
                        placeholder="0960000000"
                        _placeholder={{ opacity: 1, color: 'teal.700' }}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        onChange={e => setNumber(e.target.value)}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email" id={nameId}>
                  {({ field, form }) => (
                    <FormControl
                      mt={4}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input
                        {...field}
                        value={email}
                        type="text"
                        placeholder="John Doe"
                        _placeholder={{ opacity: 1, color: 'teal.700' }}
                        // pattern={patternName}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="name" id={nameId}>
                  {({ field, form }) => (
                    <FormControl
                      mt={4}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Birthday</FormLabel>
                      <Input
                        value={birthday}
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        onChange={e => setBirthday(e.target.value)}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="name" id={nameId}>
                  {({ field, form }) => (
                    <FormControl
                      mt={4}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Avatar</FormLabel>
                      <Select
                        // placeholder="Avatar option"
                        value={avatar}
                        onChange={e => setAvatar(e.target.value)}
                      >
                        <option value="default">default</option>
                        <option value="cat">cat</option>
                        <option value="haurt">haurt</option>
                      </Select>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="name" id={nameId}>
                  {({ field, form }) => (
                    <FormControl
                      mt={4}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Here you can write some description"
                        size="sm"
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
