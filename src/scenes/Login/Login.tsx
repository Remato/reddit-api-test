import React, { FC } from 'react';
import reddit from '../../assets/logo.png';
import { Wrapper, Input, ButtonWrapper, Button, Logo } from './styles';

type Props = {
  email: string;
  password: string;
  errors: FormErrors;
  handleEmail(email: string): void;
  handlePassword(password: string): void;
  onSubmit(): void;
};

const Login: FC<Props> = ({
  email,
  password,
  errors,
  onSubmit,
  handleEmail,
  handlePassword,
}) => {
  return (
    <Wrapper>
      <Logo source={reddit} />
      <Input
        label="E-mail"
        value={email}
        error={errors.email}
        errorHint="Invalid E-mail"
        onChangeText={handleEmail}
      />
      <Input
        label="Password"
        value={password}
        error={errors.password}
        errorHint="Invalid Password"
        isPassword
        onChangeText={handlePassword}
      />
      <ButtonWrapper>
        <Button label="Login" icon="login" onPress={onSubmit} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Login;
