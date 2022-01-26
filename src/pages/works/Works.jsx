import "./Works.scss";

const Works = () => {
  return (
    <div className="container">
      <div>
        <h3>pagina de videojuegos</h3>
        <a href="https://github.com/escri85/angularProyect">
          <img src={"./angular.png"} alt="" />
        </a>
        <p>
          Pagina realizada con angular llamada a una API para busqueda de
          <br />
          videojuegos por nombre y genero guardado de favoritos y link de
          <br />
          descargas,contiene un login sencillo para poder navegar por la pagina
        </p>
      </div>
      <div>
        <h3>pagina de rick & Morty</h3>
        <a href="https://github.com/escri85/proyect-javascrpit">
          <img src={"./rick.png"} alt="" />
        </a>
        <p>
          pagina hecha con webpack,llamando a una API y filtrando personajes por
          <br />
          nombre,añadido de personajes favoritos y reseteo de pagina hecho con
          <br />
          javascript puro, html y scss
        </p>
      </div>
      <div>
        <h3>app de lista de tareas</h3>
        <a href="https://github.com/escri85/todo-list">
          <img src={"./todolist.png"} alt="" />
        </a>
        <p>app sencilla de lista de tareas para añadir o eliminar</p>
      </div>
      <div>
        <h3>clon instagram</h3>
        <a href="https://github.com/escri85/clones/tree/master/instagram">
          <img src={"./instagram.png"} alt="" />
        </a>
        <p>cloin de instagram hecho con html y css</p>
      </div>
    </div>
  );
};

export default Works;
