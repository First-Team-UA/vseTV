'use client'
import React, {useState} from 'react'
import { useTranslation } from "react-i18next"
import SubmitButton from './submitButton'

const ContactInfoForm:React.FC = () => {
    const {t, } = useTranslation()
    const [techEmails, setTechEmails] = useState<string>('');
    const [techTel, setTechTel] = useState<string>('');
    const [finEmails, setFinEmails] = useState<string>('');
    const [finTel, setFinTel] = useState<string>('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.currentTarget
        
        switch (name) {
            case 'techEmails':
                setTechEmails(value)
                break;
            case 'techTel':
                setTechTel(value)
                break;
            case 'finEmails':
                setTechEmails(value)
                break;
            case 'finTel':
                setFinTel(value)
                break;

            default:
                return
        }
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        

        
    }
   
    return (
        <div>
            
        <h2>{t('profileContactHeader')}</h2>

            <form>
                <ul>
                    <li>
                        <label>
                            {t('techEmails')}
                            <input type="text" name='techEmails' onChange={handleChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            {t('techTel')}
                            <input type="tel" name='techTel' onChange={handleChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            {t('finEmails')}
                            <input type="text" name='finEmails' onChange={handleChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            {t('finTel')}
                            <input type="tel" name='finTel' onChange={handleChange}/>
                        </label>
                    </li>
                </ul>
                <SubmitButton/>
        </form>
        </div>
    )
}
export default ContactInfoForm