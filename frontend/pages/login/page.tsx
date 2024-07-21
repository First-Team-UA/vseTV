'use client';

import { BgContainer, LoginPageContainer } from './loginPage.styled';
import LoginForm from '@frontend/сomponents/Login/LoginForm';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
      <BgContainer></BgContainer>
    </LoginPageContainer>
  );
};
export default LoginPage;
