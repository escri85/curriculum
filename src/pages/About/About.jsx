import "./About.scss";
import Parrafo from "../../styles/Parrafo";
const About = ({ habilities }) => {
  return (
    <>
      <div className="habilities card">
        {habilities.map((element) => {
          return (
              console.log(element),
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
