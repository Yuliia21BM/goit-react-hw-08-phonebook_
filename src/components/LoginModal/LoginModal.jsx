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
                  type="email"
                  placeholder="test@test.com"
                  _placeholder={{ opacity: 1, color: 'yellow.700' }}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="*******"
                  _placeholder={{ opacity: 1, color: 'yellow.700' }}
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
