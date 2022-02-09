import "./About.scss";
import Parrafo from "../../styles/Parrafo";
import { FormattedMessage } from "react-intl";
const About = ({ habilities }) => {
  return (
    <>
      <div className="card"><FormattedMessage id="card" defaultMessage='about me'/>
              {habilities.map((element) => {
          return (
            <div key={JSON.stringify(element)}>
              <Parrafo>{element}</Parrafo>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
