'use client';

import ForgetPassword from './ForgetPassword';
import SubmitButton from './SubmitButton';
import { IResult, authAPI } from '@frontend/API/authAPI';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'login':
        setLogin(value);
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

    authAPI.LogIn(login, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>
              Login
              <input type="text" onChange={handleChange} />
            </label>
          </li>
          <li>
            <label>
              Password
              <input type="password" onChange={handleChange} />
            </label>
          </li>
        </ul>
        <SubmitButton />
      </form>
      <ForgetPassword />
    </div>
  );
};

export default LoginForm;
