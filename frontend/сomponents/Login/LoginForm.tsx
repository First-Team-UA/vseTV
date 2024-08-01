'use client';

import ForgetPassword from './ForgetPassword';
import { Form, FormContainer, Input, Item, Label, List } from '../../styles/login/Login.styled';
import SubmitButton from './SubmitButton';
import { IRequestPayload, login } from '@frontend/redux/auth/authOperations';
import { IInitital } from '@frontend/redux/auth/authSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

const LoginForm: React.FC = () => {
  const dispatch =
    useDispatch<ThunkDispatch<IInitital, IRequestPayload, Action>>();
  const router = useRouter();
  const [logIn, setLogIn] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'login':
        setLogIn(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await dispatch(login({ logIn, password })).unwrap();
      router.push('/profile');
    } catch (error) {}
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <List>
          <Item>
            <Label>
              Login
              <Input type="text" name="login" onChange={handleChange} />
            </Label>
          </Item>
          <Item>
            <Label>
              Password
              <Input type="password" name="password" onChange={handleChange} />
            </Label>
          </Item>
        </List>
        <SubmitButton />
      </Form>
      <ForgetPassword />
    </FormContainer>
  );
};

export default LoginForm;
