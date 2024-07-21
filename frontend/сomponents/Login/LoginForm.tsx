'use client';

import ForgetPassword from './ForgetPassword';
import { Form, FormContainer, Input, Item, Label, List } from './Login.styled';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      logIn,
      password,
    };
    dispatch(login(data));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <List>
          <Item>
            <Label>
              Login
              <Input type="text" onChange={handleChange} />
            </Label>
          </Item>
          <Item>
            <Label>
              Password
              <Input type="password" onChange={handleChange} />
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
