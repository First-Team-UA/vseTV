'use client'

import profileAPI from '@frontend/API/profileAPI';
import SubmitButton from './submitButton';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ChangePasswordForm: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { t } = useTranslation();

  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string') {
    return <p>Loading...</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const comparePassword = newPassword === confirmPassword;

    if (!comparePassword) {
      return;
    }

    const passObj = {
      password,
      newPassword
    }

    profileAPI.changePassword(id, passObj)

  };

  
  return (
    <div>
      <h2>{t('profile.changePasswordHeader')}</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>
              {t('profile.password')}
              <input
                type="password"
                name="oldPassword"
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              {t('profile.newPassword')}
              <input
                type="password"
                name="newPassword"
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              {t('profile.confirm')}
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </label>
          </li>
        </ul>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ChangePasswordForm;
