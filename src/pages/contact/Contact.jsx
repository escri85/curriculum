import {
  faPhone,
  faEnvelope,
  faMapPin,
  faToolbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contact.scss"
const Contact = (props) => {
  const { contact } = props;

  return (
  

    <div className="contact">
      
        <p>  <FontAwesomeIcon className="icono" icon={faMapPin} />{contact.city} </p>
        <p>
          <a href={"mailto:" + contact.email}>
          <FontAwesomeIcon className="icono" icon={faEnvelope} />
         escri85@gmail.com
          </a>
        </p>
        <p> <FontAwesomeIcon className="icono" icon={faPhone} />{contact.phone}</p>
        <p><a href={contact.gitHub}>
            GitHub
          </a></p>
          <p><a href={contact.linkedin}>
          linkedin
          </a></p>

    </div>
  );
};

export default Contact;
