import "./Header.scss";

import {
  faPhone,
  faUserGraduate,
  faBriefcase,
  faToolbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import LanguagesSelector from "../../components/LanguagesSelector/LanguagesSelector";
import Button from "../../styles/Button";
import Navbar from "./Navbar";
const Header = (props) => {
  const {
    contact,
    changeComponent,
  } = props;





  return (


    <div className="header">
      <div className="sup">
      <img src={contact.image} alt="" />
  <h2><FormattedMessage id="Bienvenido"/></h2>

      </div>
      <div className="botones">
  <LanguagesSelector/>
        <Button onClick={()=>{changeComponent('contact')}}>
              <FontAwesomeIcon className="icono" icon={faPhone} />
              <FormattedMessage id="boton-contacto"/>
          {/* Contacto */}
        </Button>
        <Button onClick={()=>{changeComponent('about')}}>
          <FontAwesomeIcon className="icono" icon={faUser} />
          <FormattedMessage id="boton-about"/>
          
          {/* About */}
        </Button>
        <Button onClick={()=>{changeComponent('works')}}>
          <FontAwesomeIcon className="icono" icon={faBriefcase} />
          <FormattedMessage id="boton-trabajos"/>

          {/* Trabajos */}
        </Button>
        <Button onClick={()=>{changeComponent('formation')}}>
          <FontAwesomeIcon className="icono" icon={faUserGraduate} />
          <FormattedMessage id="boton-formacion"/>
          
          {/* Formacion */}
        </Button>
        <Button onClick={()=>{changeComponent('experience')}}>
          <FontAwesomeIcon className="icono" icon={faToolbox} />
          <FormattedMessage id="boton-experiencia"/>

          {/* Experiencia */}
        </Button>

      </div>
    </div>
  );
};

export default Header;
