
import Parrafo from "../../styles/Parrafo";

const Formation = ({formacion}) => {
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
    </div>
    </> )
}
 
export default Formation;