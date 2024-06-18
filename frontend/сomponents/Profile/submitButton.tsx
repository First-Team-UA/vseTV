import React from "react"
import { useTranslation } from "react-i18next"

const SubmitButton: React.FC = () => {
    const { t } = useTranslation();
    return (
        <button type="submit">{t('profile.button')}</button>
    )
}

export default SubmitButton