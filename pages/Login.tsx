import React, { useState } from 'react';
import { Container, Spacer, Input, Button, Text, Row } from '@nextui-org/react';
import { SwappifyLogo } from '../components/NavBar/SwappifyLogo';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <Container>
      <Row>
      <Input clearable bordered labelPlaceholder="Email" type='email' />
      </Row>
      <Row>
      <Input clearable bordered labelPlaceholder="Password" type='password' />
      </Row>
    </Container>
  );
};

export default Login;
