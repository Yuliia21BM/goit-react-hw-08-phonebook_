import { useState } from 'react';
import {
  Button,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useLoginUserMutation } from 'components/redux/authApi';

import { ModalWrap } from 'components/ModalWrap/ModalWrap';

export const LoginModal = ({ isOpen, onClose }) => {
  const [userPasword, setUserPasword] = useState('');
  const [show, setShow] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const [login, { isLoading, isError }] = useLoginUserMutation();

  const handleSubmiLogimForm = e => {
    e.preventDefault();
    login({
      email: userEmail,
      password: userPasword,
    })
      .then(res => console.log(res.data.token, isLoading, isError))
      .catch(err => console.log(err));
  };

  return (
    <ModalWrap isOpen={isOpen} onClose={onClose}>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmiLogimForm}>
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
                <InputGroup>
                  <Input
                    value={userPasword}
                    placeholder="*******"
                    _placeholder={{ opacity: 1, color: 'yellow.700' }}
                    onChange={e => setUserPasword(e.target.value)}
                    type={show ? 'text' : 'password'}
                  />
                  <InputRightElement>
                    <Button
                      bgColor="transparent"
                      border="none"
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
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
