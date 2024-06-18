import React from "react"
import { useTranslation } from "react-i18next"

const LangSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const changeLang = (lng: string) => {
        i18n.changeLanguage(lng)
    }
    

    const handleLanguage = (e:React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const {value} = e.currentTarget

        switch (value) {
            case 'ukr':
                changeLang('ukr');
                break;
            case 'rus':
                changeLang('rus');
                break;
            case 'eng':
                changeLang('eng')
                break;
            default:
                changeLang('ukr')
        }
    }
       
      

    return (
        <div className='mr-4 flex bg-slate-600'>
            <select name="language"  onChange={handleLanguage}>
                <option value="ukr">UKR</option>
                <option value="rus">RUS</option>
                <option value="eng">ENG</option>
            </select>
        </div>
)    
}

export default LangSwitcher