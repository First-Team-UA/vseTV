'use client';

import {
  BgContainer,
  FormContainer,
  LoginPageContainer,
} from '../../styles/login/loginPage.styled';
import LoginForm from '@frontend/сomponents/Login/LoginForm';
import Logo from '@frontend/сomponents/Logo/Logo';
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <FormContainer>
        <Logo />
        <LoginForm />
      </FormContainer>
      <BgContainer></BgContainer>
    </LoginPageContainer>
  );
};
export default LoginPage;
