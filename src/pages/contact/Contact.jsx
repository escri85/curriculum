
import "./Contact.scss"
import Parrafo from "../../styles/Parrafo";
const Contact = (props) => {
  const { contact } = props;

  return (
    // <div className="contact">
    // <div className="image">
    //   <img src={contact.image} alt="" />
    // </div>
    // <div className="data">
    //     <h2>{contact.name} {contact.lastName}</h2>
    //     <p>{contact.city} </p>
    //     <p>{contact.birthDate}</p>
    // </div>
    // </div>

    <div className="hero">
      <div className="card">
        <Parrafo>🗺️{contact.city} </Parrafo>
        <Parrafo>🗓️{contact.birthDate}</Parrafo>
        <Parrafo>
          📧
          <a href={"mailto:" + contact.email}>
         escri85@gmail.com
          </a>
        </Parrafo>
        <Parrafo>📱 {contact.phone}</Parrafo>
        <Parrafo>💾<a href={contact.gitHub}>
            GitHub
          </a></Parrafo>
          <Parrafo>💾<a href={contact.linkedin}>
          linkedin
          </a></Parrafo>
      </div>
    </div>
  );
};

export default Contact;
