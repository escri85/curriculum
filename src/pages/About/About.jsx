import "./About.scss";
import Parrafo from "../../styles/Parrafo";
const About = ({ habilities }) => {
  return (
    <>
      <div className="card">
        {habilities.map((element) => {
          return (
            <div className={JSON.stringify(element)}>
              <Parrafo>{element}</Parrafo>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
