import React, { Component } from 'react';
import Menuenbarra from '../components/Menuenbarra';
import {Link} from 'react-router-dom'; 

class Tiposdeconflicto extends Component {
  render() {
    return (
      <>
      <Menuenbarra/>
        <h1>Tipos de Conflictos</h1>
        <h2>Conflicto intrapersonal</h2>
        <p class="1">
          Este conflicto ocurre de forma interna, en la mente del individuo.
        </p>
    <Link to="/clasifica"> <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button></Link>  

        <h2>Conflicto interpersonal</h2>
        <p class="2">
          Se producen en los procesos de interacción entre personas.
        </p>
        <Link to="/clasifica">  <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button></Link>  

        <h2>Conflicto relacionales</h2>
        <p class="3">Ocurren entre miembros de una familia, amigos o pareja.</p>
        <Link to="/clasifica">    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button></Link>

        <h2>Conflictos de personalidad</h2>
        <p class="1">
          La personalidad puede ser la base de muchos conflictos intergrupales.
        </p>
        <Link to="/clasifica">   <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button></Link> 

        <h2>Otro tipo de conflicto</h2>
        <p class="1"></p>
        <Link to="/clasifica">  <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button></Link>   

        <footer>
          <div class="copyright">
            <p>Todos los derechos reservados 2020-2021</p>
            <i class="fab fa-instagram fa-2x"></i> &nbsp;&nbsp;
            <i class="fab fa-twitter fa-2x"></i> &nbsp;&nbsp;
            <i class="fab fa-facebook-square fa-2x"></i> &nbsp;&nbsp;
          </div>
        </footer>

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossorigin="anonymous" ></script>
      </>
    );
  }
}
export default Tiposdeconflicto;
         