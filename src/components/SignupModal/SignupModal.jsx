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

export const SignupModal = ({ isOpen, onClose }) => {
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
                  type="text"
                  placeholder="John Doe"
                  _placeholder={{ opacity: 1, color: 'teal.700' }}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="test@test.com"
                  _placeholder={{ opacity: 1, color: 'teal.700' }}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="*******"
                  _placeholder={{ opacity: 1, color: 'teal.700' }}
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
