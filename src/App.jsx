import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Works, Formation, Contact, About,Experience } from "./pages/index";
import { Cv } from "./components/Cv";
const { contact, formacion, experience, languages, habilities } = Cv;
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact contact={contact} />} />
          <Route path="/experiencia" element={<Experience experience={experience} />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
