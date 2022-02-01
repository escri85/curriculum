import "./Header.scss";
import Button from "../../styles/Button";
import {
  faPhone,
  faUserGraduate,
  faBriefcase,
  faToolbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = (props) => {
  const {
    contact,
    changeContact,
    changeFormation,
    changeExperience,
    changeWorks,
    changeAbout,
  } = props;
  return (
    <div className="header">
      <img src={contact.image} alt="" />
      <h2>Sergio Escribano</h2>
      <h5>web developer</h5>
      <div className="botones">
        <Button onClick={changeContact}>
              <FontAwesomeIcon className="icono" icon={faPhone} />
          Contacto
        </Button>
        <Button onClick={changeAbout}>
          <FontAwesomeIcon className="icono" icon={faUser} />
          About
        </Button>
        <Button onClick={changeWorks}>
          <FontAwesomeIcon className="icono" icon={faBriefcase} />
          Trabajos
        </Button>
        <Button onClick={changeFormation}>
          <FontAwesomeIcon className="icono" icon={faUserGraduate} />
          Formacion
        </Button>
        <Button onClick={changeExperience}>
          <FontAwesomeIcon className="icono" icon={faToolbox} />
          Experiencia
        </Button>
      </div>
    </div>
  );
};

export default Header;
