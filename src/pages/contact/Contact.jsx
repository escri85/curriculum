
import "./Contact.scss"

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
      <img src={contact.image} alt="" />
      <div className="card">
      <h2>
        {contact.name} {contact.lastName}
      </h2>
        <p>🗺️{contact.city} </p>
        <p>🗓️{contact.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + contact.email}>
         escri85@gmail.com
          </a>
        </p>
        <p>📱 {contact.phone}</p>
        <p>💾<a href={contact.gitHub}>
            GitHub
          </a></p>
          <p>💾<a href={contact.linkedin}>
          linkedin
          </a></p>
      </div>
    </div>
  );
};

export default Contact;
