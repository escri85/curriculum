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
    changeComponent,
  } = props;
  return (
    <div className="header">
      <img src={contact.image} alt="" />
      <h2>Sergio Escribano</h2>
      <h3>web developer</h3>
      <div className="botones">
        <Button onClick={()=>{changeComponent('contact')}}>
              <FontAwesomeIcon className="icono" icon={faPhone} />
          Contacto
        </Button>
        <Button onClick={()=>{changeComponent('about')}}>
          <FontAwesomeIcon className="icono" icon={faUser} />
          About
        </Button>
        <Button onClick={()=>{changeComponent('works')}}>
          <FontAwesomeIcon className="icono" icon={faBriefcase} />
          Trabajos
        </Button>
        <Button onClick={()=>{changeComponent('formation')}}>
          <FontAwesomeIcon className="icono" icon={faUserGraduate} />
          Formacion
        </Button>
        <Button onClick={()=>{changeComponent('experience')}}>
          <FontAwesomeIcon className="icono" icon={faToolbox} />
          Experiencia
        </Button>
      </div>
    </div>
  );
};

export default Header;
