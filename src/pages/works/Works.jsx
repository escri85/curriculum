import { FormattedMessage } from "react-intl";
import "./Works.scss";

const Works = () => {
  return (
    <>
    <div className="items-cards">
      <div className="card">
        <img src={"./angular.png"} alt="" />
        <h3><FormattedMessage id="videojuegos"/></h3>
        <p><FormattedMessage id="parrafo-angular"/></p>
      </div>
    </div>
{/*     <ul className="cards">
  <li className="item">
    <a href="https://github.com/escri85/angularProyect" className="card">
      <img src={"./angular.png"} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title"><FormattedMessage id="videojuegos"/></h3>            
          </div>
        </div>
        <p className="card__description"><FormattedMessage id="parrafo-angular"/></p>
      </div>
    </a>      
  </li>  
  <li>
    <a href="https://github.com/escri85/proyect-javascrpit" className="card">
      <img src={"./rick.png"}className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className="card__header-text">
            <h3 className="card__title"> <FormattedMessage id="titulo-rick"/></h3>            
          </div>
        </div>
        <p className="card__description"><FormattedMessage id="parrafo-rick"/></p>
      </div>
    </a>      
  </li>  
  <li>
    <a href="https://github.com/escri85/todo-list" className="card">
      <img src={"./todolist.png"}className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className="card__header-text">
            <h3 className="card__title"> <FormattedMessage id="titulo-tareas"/></h3>            
          </div>
        </div>
        <p className="card__description"><FormattedMessage id="parrafo-tareas"/></p>
      </div>
    </a>      
  </li> 
  <li>
    <a href="https://github.com/escri85/clones/tree/master/instagram" className="card">
      <img src={"./instagram.png"}className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">Clon Instagram</h3>            
          </div>
        </div>
        <p className="card__description"><FormattedMessage id="parrafo-insta"/></p>
      </div>
    </a>      
  </li> 
</ul> */}
    </>

  );
};

export default Works;
