import React from 'react';
import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../../context/LanguageContext';
import './LanguagesSelector.scss'
const LanguagesSelector = () => {
  const {locale,changeLanguage}= useContext(LanguageContext)
  
  
  
    return (
    <div>
    {/* <p ><FormattedMessage id="languageSelector.title" defaultMessage="Elige tu idioma"/></p> */}
    <select value={locale} onChange={(ev) => changeLanguage(ev.target.value)} className='titulo-idioma'>
        <option value="es">Spanish</option>
        <option value="en">English</option>
    </select>
</div>

  )
};

export default LanguagesSelector;
