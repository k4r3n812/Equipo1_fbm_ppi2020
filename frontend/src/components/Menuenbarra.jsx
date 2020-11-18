import React from 'react';
import { Link }  from 'react-router-dom';


const Menuenbarra = (props) => {

     return (
    <>


    <div classNameName="App">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand text-primary" href="#">  Psico-Félix </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <button   className="btn btn-outline-primary my-2 my-sm-0" type="submit" >    Menú </button>
      </li>
      <ul className="nav-item">
       <Link to="/chat"> <button className="btn btn-outline-primary my-2 my-sm-0"  type="submit"  >   Chat
        </button></Link>
      </ul>
      <ul className="nav-item">
      <Link to="/acercad">  <button  className="btn btn-outline-primary my-2 my-sm-0"    type="submit"    >
          Acerca de  </button></Link>
      </ul>
      <ul className="nav-item dropdown text-dark">
       <Link to="/quienes"> <button
          className="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
        >
          ¿Quienes somos?
        </button></Link>

        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Karen Gordon
          </button>
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Dayanna Martínez
          </button>
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Natacha Fornier
          </button>
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit" >
            Santiago Ríos
          </button>
        </div>
      </ul>
      <ul className="nav-item">
      <Link to="/masinfo">  <button
          className="btn btn-outline-primary my-2 my-sm-0"
          type="submit" >Más información</button></Link>
      </ul>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="¿Qué Buscas?"
        aria-label="Search"
      />
  <button  classNameName="btn btn-outline-primary my-2 my-sm-0"
        type="submit"> Buscar</button>
    </form>
  </div>
</nav>


</div>
</>
      );
      
    }
    export default Menuenbarra;