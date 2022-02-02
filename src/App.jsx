/* eslint-disable default-case */
import "./App.scss";
// import Navbar from "./components/Navbar/Navbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Works,
  Formation,
  Contact,
  About,
  Experience,
  // Home,
  // Notfound,
  Header,
} from "./pages/index";
import { Cv } from "./components/Cv";
import { useState } from "react";
const { contact, formacion, experience, languages, habilities } = Cv;

function App() {
 
  const [component,setComponent]=useState( <Contact contact={contact} />)

const changeComponent=(componentName)=>{
 const components={
   contact: <Contact contact={contact} />,
   formation: <Formation formacion={formacion} languages={languages}/>,
   experience: <Experience experience={experience} />,
   about: <About habilities={habilities} />,
   works:  <Works />,

 }
 setComponent(components[componentName])
}

  return (
    <div className="app">
      <div className="app__botons">
        <Header
          contact={contact}
         changeComponent={changeComponent}
        />
      </div>
      <div className="app__info">
      {component}
      </div>
    </div>
  );
}

export default App;
//sistema de rutas
/*   <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact contact={contact} />} />
          <Route
            path="/experiencia"
            element={<Experience experience={experience} />}
          />
          <Route
            path="/formacion"
            element={
              <Formation
                formacion={formacion}
                languages={languages}
                habilities={habilities}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/trabajos" element={<Works />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </> */
