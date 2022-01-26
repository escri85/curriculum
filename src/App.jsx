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
import Button from "./styles/Button";
const { contact, formacion, experience, languages, habilities } = Cv;

function App() {
  const [showContact, setContact] = useState(false);
  const [showFormation, setFormation] = useState(false);
  const [showwork, setwork] = useState(false);
  const [showAbout, setAbout] = useState(false);
  const [showExperience, setExperience] = useState(false);

  const changeContact = (e) => {
    e.preventDefault();
    setContact(true);
    setFormation(false);
    setExperience(false);
    setwork(false);
    setAbout(false);
  };
  const changeFormation = (e) => {
    e.preventDefault();
    setFormation(true);
    setContact(false);
    setwork(false);
    setAbout(false);
    setExperience(false);
  };
  const changeExperience = () => {
    setContact(false);
    setFormation(false);
    setExperience(true);
    setwork(false);
    setAbout(false);
  };
  const changeWorks = () => {
    setContact(false);
    setFormation(false);
    setExperience(false);
    setwork(true);
    setAbout(false);
  };
  const changeAbout = () => {
    setContact(false);
    setFormation(false);
    setExperience(false);
    setwork(false);
    setAbout(true);
  };
  return (
    <div className="app">
      <div className="app__botons">
        <Header />
        <Button onClick={changeContact}>Contacto</Button>
        <Button onClick={changeFormation}>Formacion</Button>
        <Button onClick={changeExperience}>Experiencia</Button>
        <Button onClick={changeWorks}>Trabajos</Button>
        <Button onClick={changeAbout}>Sobre mi</Button>
      </div>
      <div className="app__info">
        {showContact ? <Contact contact={contact} /> : null}
        {showFormation ? <Formation formacion={formacion} /> : null}
        {showExperience ? <Experience experience={experience} /> : null}
        {showAbout ? <About languages={languages} habilities={habilities} /> :(null)}
        {showwork ? <Works/>:(null)}
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
