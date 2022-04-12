import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./LanguagesSelector.scss";
const LanguagesSelector = () => {
  const { locale, changeLanguage } = useContext(LanguageContext);
  const [ischecked, setChecked] = useState(false);

  const handleLanguage = () =>{
    if(locale === 'es'){
        changeLanguage('en')
        setChecked(true)
    }else{
        changeLanguage('es')
        setChecked(false)
    }
}

  return (
    <div>
      
        <label className="switch">
          <input type="checkbox" value={locale} checked={ischecked} onChange={handleLanguage}/>
          <span className="slider"></span>
        </label>
      
    </div>
  );
};

export default LanguagesSelector;
