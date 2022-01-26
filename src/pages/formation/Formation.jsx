
import Parrafo from "../../styles/Parrafo";

const Formation = ({formacion,languages}) => {
    return ( <>
          <div>
      <div className="education card">
        {formacion.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <Parrafo className="name">📕 {item.name}</Parrafo>
              <Parrafo>{item.where}</Parrafo>
              <Parrafo>{item.date}</Parrafo>
            </div>
          );
        })}
      </div>
      <div className="languages card">
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <Parrafo className="name">📕 {item.language}</Parrafo>
              <Parrafo>{item.wrlevel}</Parrafo>
              <Parrafo>{item.splevel}</Parrafo>
            </div>
          );
        })}
      </div>
    </div>
    </> )
}
 
export default Formation;