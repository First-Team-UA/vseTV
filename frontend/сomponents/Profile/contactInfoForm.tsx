'use client'
import React, {useState} from 'react'
import { useTranslation } from "react-i18next"
import SubmitButton from './submitButton'
import profileAPI from '@frontend/API/profileAPI'
import { useRouter } from 'next/router'




const ContactInfoForm:React.FC = () => {
    const {t, } = useTranslation()
    const [techEmails, setTechEmails] = useState<string>('');
    const [techTel, setTechTel] = useState<string>('');
    const [finEmails, setFinEmails] = useState<string>('');
    const [finTel, setFinTel] = useState<string>('')

    const router = useRouter();
    const { id } = router.query 
    
     if (typeof id !== 'string') {
    return <p>Loading...</p>;
  }


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
                setFinEmails(value)
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
       

        const formData = {
            contact_email_tech: techEmails,
            contact_tel_tech: techTel,
            contact_email_fin: finEmails,
            contact_tel_fin: finTel
        }

        profileAPI.changeClientInfo(id, formData)

        
    }
   
    return (
        <div>
            
        <h2>{t('profile.contactHeader')}</h2>

            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>
                            {t('profile.techEmails')}
                            <input type="text" value={techEmails} name='techEmails' onChange={handleChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            {t('profile.techTel')}
                            <input type="tel" value={techTel} name='techTel' onChange={handleChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            {t('profile.finEmails')}
                            <input type="text" value={finEmails} name='finEmails' onChange={handleChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            {t('profile.finTel')}
                            <input type="tel" value={finTel} name='finTel' onChange={handleChange}/>
                        </label>
                    </li>
                </ul>
                <SubmitButton/>
        </form>
        </div>
    )
}
export default ContactInfoForm