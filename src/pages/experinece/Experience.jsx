import { FormattedMessage } from "react-intl";
import Parrafo from "../../styles/Parrafo";

const Experience = ({experience}) => {
    return ( <>
         <div>
      <div className="education card"><FormattedMessage id="education card"  />
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <Parrafo className="name">📕 {item.name}</Parrafo>
              <Parrafo>{item.where}</Parrafo>
              <Parrafo>{item.date}</Parrafo>
              <Parrafo>{item.description}</Parrafo>
            </div>
          );
        })}
      </div>
    </div>
    </> );
}
 
export default Experience;