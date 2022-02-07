import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
import { Routes, STACKS } from '../../utils/enums';

const LoginContainer: FC = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('123456');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { navigate } = useNavigation();

  const onSubmit = async () => {
    // user hardcoded only for test purposes
    if (email === 'admin@gmail.com' && password === '123456') {
      navigate(STACKS.PRIVATE, { screen: Routes.DASHBOARD });
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  const handleEmail = (email: string) => setEmail(email);

  const handlePassword = (password: string) => setPassword(password);

  return (
    <Login
      email={email}
      errors={{ email: emailError, password: passwordError }}
      password={password}
      onSubmit={onSubmit}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
    />
  );
};

export default LoginContainer;
