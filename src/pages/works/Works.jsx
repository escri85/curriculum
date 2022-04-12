import { FormattedMessage } from "react-intl";
import "./Works.scss";

const Works = () => {
  return (
    <>
      <div className="items-cards">
        <a className="card" href="https://github.com/escri85/angularProyect" >
          <img src={"./angular.png"} alt="" />
          <h3>
            <FormattedMessage id="videojuegos" />
          </h3>
          <p>
            <FormattedMessage id="parrafo-angular" />
          </p>
        </a>
        <a className="card" href="https://github.com/escri85/proyect-javascrpit">
          <img src={"./hcj.png"} alt="" />
          <h3>
            <FormattedMessage id="titulo-rick" />
          </h3>
          <p>
            <FormattedMessage id="parrafo-rick" />
          </p>
        </a>
        <a className="card" href="https://github.com/escri85/todo-list" >
          <img src={"./react.png"} alt="" />
          <h3>
            <FormattedMessage id="titulo-tareas" />
          </h3>
          <p>
            <FormattedMessage id="parrafo-tareas" />
          </p>
        </a>
        <a className="card" href="https://github.com/escri85/clones/tree/master/instagram">
          <img src={"./hcj.png"} alt="" />
          <h3>
           Clon Instagram
          </h3>
          <p>
            <FormattedMessage id="parrafo-insta" />
          </p>
        </a>
        <a className="card" href="https://github.com/escri85/final-proyect-upgrade-hub">
          <img src={"./mern.png"} alt="" />
          <h3>
          <FormattedMessage id="titulo-ecomerce" />

          </h3>
          <p>
            <FormattedMessage id="parrafo-ecomerce" />
          </p>
        </a>
        <a className="card" href="https://github.com/escri85/calculadora_react">
          <img src={"./react.png"} alt="" />
          <h3>
          <FormattedMessage id="titulo-calculadora" />

          </h3>
          <p>
            <FormattedMessage id="parrafo-calculadora" />
          </p>
        </a>

    
      </div>
    </>
  );
};

export default Works;
