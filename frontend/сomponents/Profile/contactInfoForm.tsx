'use client';

import {
  InfoContainer,
  InfoForm,
  InfoHeader,
  InfoInput,
  InfoItem,
  InfoLabel,
  InfoList,
} from './profile.styled';
import SubmitButton from './submitButton';
import profileAPI from '@frontend/API/profileAPI';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactInfoForm: React.FC = () => {
  const { t } = useTranslation();
  const [techEmails, setTechEmails] = useState<string>('');
  const [techTel, setTechTel] = useState<string>('');
  const [finEmails, setFinEmails] = useState<string>('');
  const [finTel, setFinTel] = useState<string>('');

  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string') {
    return <p>Loading...</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'techEmails':
        setTechEmails(value);
        break;
      case 'techTel':
        setTechTel(value);
        break;
      case 'finEmails':
        setFinEmails(value);
        break;
      case 'finTel':
        setFinTel(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      contact_email_tech: techEmails,
      contact_tel_tech: techTel,
      contact_email_fin: finEmails,
      contact_tel_fin: finTel,
    };

    profileAPI.changeClientInfo(id, formData);
  };

  return (
    <InfoContainer>
      <InfoHeader>{t('profile.contactHeader')}</InfoHeader>

      <InfoForm onSubmit={handleSubmit}>
        <InfoList>
          <InfoItem>
            <InfoLabel>
              {t('profile.techEmails')}
              <InfoInput
                type="text"
                value={techEmails}
                name="techEmails"
                onChange={handleChange}
              />
            </InfoLabel>
          </InfoItem>
          <InfoItem>
            <InfoLabel>
              {t('profile.techTel')}
              <InfoInput
                type="tel"
                value={techTel}
                name="techTel"
                onChange={handleChange}
              />
            </InfoLabel>
          </InfoItem>
          <InfoItem>
            <InfoLabel>
              {t('profile.finEmails')}
              <InfoInput
                type="text"
                value={finEmails}
                name="finEmails"
                onChange={handleChange}
              />
            </InfoLabel>
          </InfoItem>
          <InfoItem>
            <InfoLabel>
              {t('profile.finTel')}
              <InfoInput
                type="tel"
                value={finTel}
                name="finTel"
                onChange={handleChange}
              />
            </InfoLabel>
          </InfoItem>
        </InfoList>
        <SubmitButton />
      </InfoForm>
    </InfoContainer>
  );
};
export default ContactInfoForm;
