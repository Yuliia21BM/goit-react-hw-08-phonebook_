import {
  Button,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ModalWrap } from 'components/ModalWrap/ModalWrap';
import { useState } from 'react';

export const SignupModal = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPasword, setUserPasword] = useState('');
  return (
    <ModalWrap isOpen={isOpen} onClose={onClose}>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  value={userName}
                  type="text"
                  placeholder="John Doe"
                  _placeholder={{ opacity: 1, color: 'teal.700' }}
                  onChange={e => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  value={userEmail}
                  type="email"
                  placeholder="test@test.com"
                  _placeholder={{ opacity: 1, color: 'teal.700' }}
                  onChange={e => setUserEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  value={userPasword}
                  type="password"
                  placeholder="*******"
                  _placeholder={{ opacity: 1, color: 'teal.700' }}
                  onChange={e => setUserPasword(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="yellow"
                variant="outline"
                width="full"
                mt={6}
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </ModalWrap>
  );
};
