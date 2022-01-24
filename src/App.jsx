import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Works,
  Formation,
  Contact,
  About,
  Experience,
  Home,
  Notfound,
  Header
} from "./pages/index";
import { Cv } from "./components/Cv";
import { useState } from "react";
const { contact, formacion, experience, languages, habilities } = Cv;
function App() {

  const [showContact,setContact]=useState(false)
  const [showFormation,setFormation]=useState(false)

const changeContact = ()=>{
  setContact(true)
  
}
const changeFormation = ()=>{
  setFormation(true)
}

  return (
<div className="app">
  <div className="app__botons">
  <Header/>
    <button onClick={changeContact}>Contacto</button>
    <button onClick={changeFormation}>Formacion</button>
    <button >Experiencia</button>
    <button >Trabajos</button>
    <button >Sobre mi</button>
  </div>
  <div className="app__info">
  {showContact?(<Contact contact={contact}/>):(null)}
  {showFormation?(<Formation formacion={formacion}/>):(null)}
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