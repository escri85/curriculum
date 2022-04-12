
import './Formacion.scss'
const Formation = ({formacion,languages}) => {
    return ( <>
          <div>
      <div>
        {formacion.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">{item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
      <div className="card">
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"> {item.language}</p>
              <p>{item.wrlevel}</p>
              <p>{item.splevel}</p>
            </div>
          );
        })}
      </div>
    </div>
    </> )
}
 
export default Formation;