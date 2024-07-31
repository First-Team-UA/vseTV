'use client';

import {
  InfoForm,
  InfoHeader,
  InfoInput,
  InfoItem,
  InfoLabel,
  InfoList,
  PassContainer,
} from '../../styles/profile/profile.styled';
import SubmitButton from './submitButton';
import profileAPI from '@frontend/API/profileAPI';
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
      newPassword,
    };

    profileAPI.changePassword(id, passObj);
  };

  return (
    <PassContainer>
      <InfoHeader>{t('profile.changePasswordHeader')}</InfoHeader>
      <InfoForm onSubmit={handleSubmit}>
        <InfoList>
          <InfoItem>
            <InfoLabel>
              {t('profile.password')}
              <InfoInput
                type="password"
                name="oldPassword"
                onChange={handleChange}
              />
            </InfoLabel>
          </InfoItem>
          <InfoItem>
            <InfoLabel>
              {t('profile.newPassword')}
              <InfoInput
                type="password"
                name="newPassword"
                onChange={handleChange}
              />
            </InfoLabel>
          </InfoItem>
          <InfoItem>
            <InfoLabel>
              {t('profile.confirm')}
              <InfoInput
                type="password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </InfoLabel>
          </InfoItem>
        </InfoList>
        <SubmitButton />
      </InfoForm>
    </PassContainer>
  );
};

export default ChangePasswordForm;
