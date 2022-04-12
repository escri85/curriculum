import "./About.scss";
import { FormattedMessage } from "react-intl";
const About = ({ habilities }) => {
  return (
    <>
      <div className="about"><FormattedMessage id="card" defaultMessage='about me'/>
              {habilities.map((element) => {
          return (
            <div key={JSON.stringify(element)}>
              <p>{element}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
