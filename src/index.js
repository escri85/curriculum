import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import LanguageWrapper from "./context/LanguageContext";
// import { IntlProvider } from "react-intl";
// import english from './lang/en.json'
// import spanish from './lang/es.json'

// const locale = 'en'
// let lang;

// switch (locale) {
//   case 'es':{
//     lang=spanish

//     break;}
//     case 'en':
//    { lang = english

//     break;
// }
//   default:
//     lang = spanish
// }

ReactDOM.render(
  <React.StrictMode>
    <LanguageWrapper>
      <App />
    </LanguageWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
