import { useState } from 'react';
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

export const LoginModal = ({ isOpen, onClose }) => {
  const [userPasword, setUserPasword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  return (
    <ModalWrap isOpen={isOpen} onClose={onClose}>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  value={userEmail}
                  type="email"
                  placeholder="test@test.com"
                  _placeholder={{ opacity: 1, color: 'yellow.700' }}
                  onChange={e => setUserEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  value={userPasword}
                  type="password"
                  placeholder="*******"
                  _placeholder={{ opacity: 1, color: 'yellow.700' }}
                  onChange={e => setUserPasword(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                variant="outline"
                width="full"
                mt={6}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </ModalWrap>
  );
};
