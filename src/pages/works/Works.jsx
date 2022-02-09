import { FormattedMessage } from "react-intl";
import "./Works.scss";

const Works = () => {
  return (
    <div className="container">
      <div className="card">
        <h3><FormattedMessage id="videojuegos"/></h3>
        <a href="https://github.com/escri85/angularProyect">
          <img src={"./angular.png"} alt="" />
        </a>
        <p>
        <FormattedMessage id="parrafo-angular"/>
        </p>
      </div>
      <div className="card">
        <h3>
        <FormattedMessage id="titulo-rick"/>

        </h3>
        <a href="https://github.com/escri85/proyect-javascrpit">
          <img src={"./rick.png"} alt="" />
        </a>
        <p>
        <FormattedMessage id="parrafo-rick"/>

          
        </p>
      </div>
      <div className="card">
        <h3> <FormattedMessage id="titulo-tareas"/>  </h3>
        <a href="https://github.com/escri85/todo-list">
          <img src={"./todolist.png"} alt="" />
        </a>
        <p> <FormattedMessage id="parrafo-tareas"/> </p>
      </div>
      <div className="card">
        <h3>clon instagram</h3>
        <a href="https://github.com/escri85/clones/tree/master/instagram">
          <img src={"./instagram.png"} alt="" />
        </a>
        <p><FormattedMessage id="parrafo-insta"/> </p>
      </div>
    </div>
  );
};

export default Works;
