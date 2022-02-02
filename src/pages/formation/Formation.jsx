
import Parrafo from "../../styles/Parrafo";
import './Formacion.scss'
const Formation = ({formacion,languages}) => {
    return ( <>
          <div className="formacion">
      <div className="card">
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
      <div className="card">
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