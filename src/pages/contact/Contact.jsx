
import "./Contact.scss"
const Contact = (props) => {
  const { contact } = props;

  return (
  

    <div >
      <div>
        <p>{contact.city} </p>
        <p>{contact.birthDate}</p>
        <p>
          
          <a href={"mailto:" + contact.email}>
         escri85@gmail.com
          </a>
        </p>
        <p> {contact.phone}</p>
        <p><a href={contact.gitHub}>
            GitHub
          </a></p>
          <p><a href={contact.linkedin}>
          linkedin
          </a></p>
      </div>
    </div>
  );
};

export default Contact;
