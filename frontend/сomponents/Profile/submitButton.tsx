import { Btn } from '../../styles/profile/profile.styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SubmitButton: React.FC = () => {
  const { t } = useTranslation();
  return <Btn type="submit">{t('profile.button')}</Btn>;
};

export default SubmitButton;
