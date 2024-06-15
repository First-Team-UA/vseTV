import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SubmitButton from './submitButton';

const ChangePasswordForm: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.currentTarget
        
        switch (name) {
            case 'password':
                setPassword(value)
                break;
            case 'newPassword':
                setNewPassword(value)
                break;
            case 'confirmPassword':
                setConfirmPassword(value)
                break;
            default:
                return
        }
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const comparePassword = newPassword === confirmPassword;

        if (!comparePassword) {
            return
        }


    }

  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('changePasswordHeader')}</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>
                {t('password')}
              <input type="password" name='oldPassword' onChange={handleChange}/>
            </label>
          </li>
          <li>
            <label>
                {t('newPassword')}
              <input type="password" name='newPassword' onChange={handleChange}/>
            </label>
          </li>
          <li>
            <label>
                {t('confirm')}
              <input type="password" name='confirmPassword' onChange={handleChange}/>
            </label>
          </li>
              </ul>
              <SubmitButton/>
      </form>
    </div>
  );
};

export default ChangePasswordForm