/* eslint-disable default-case */
import "./App.scss";
// import { FormattedMessage } from "react-intl";

import {
  Works,
  Formation,
  Contact,
  About,
  Experience,
  Header,
} from "./pages/index";
import { Cv } from "./components/Cv";
import { useState } from "react";
const { contact, formacion, experience, languages, habilities } = Cv;

function App() {
  const [component, setComponent] = useState(<Contact contact={contact} />);

  const changeComponent = (componentName) => {
    const components = {
      contact: <Contact contact={contact} />,
      formation: <Formation formacion={formacion} languages={languages} />,
      experience: <Experience experience={experience} />,
      about: <About habilities={habilities} />,
      works: <Works />,
    };
    setComponent(components[componentName]);
  };

  return (
    <div className="app">
      <div className="app__botons">
       {/*  <h1>
          <FormattedMessage
            id="app.example"
            defaultMessage="titulo por defecto"
            values={{lastName:'Escribano'}}
            
          />
        </h1> */}
        <Header contact={contact} changeComponent={changeComponent} />
      </div>
      <div className="app__info">{component}</div>
    </div>
  );
}

export default App;
