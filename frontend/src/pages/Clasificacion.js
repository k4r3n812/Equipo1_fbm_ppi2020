import React, { Component } from "react";
import {Link} from 'react-router-dom'; 
import Menuenbarra from "../components/Menuenbarra";
import '../Estilos/Clasificacion.css';


class Clasificacion extends Component {
  render() {
    return (
      <>

<h1>Clasificación</h1>
<Menuenbarra/>
<form class="bot ">
<input
class="form-control mr-sm-2"
type="search"
placeholder="Escribe tu problema"
aria-label="Search"/>
<button class="enviar " type="submit">
  Enviar
</button>
</form>

<h2> ¿Cómo clasificas tu conflicto?</h2>
<button class="leve" type="submit">
Leve
</button>
<button class="grave" type="submit">
Grave
</button>
<button class="critico" type="submit">
Crítico
</button>

<h3>Mensaje del día</h3>
<p class="Mensa">
El éxito es ir de fracaso en fracaso sin perder el entusiasmo. –
Winston Churchill
</p>

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
crossorigin="anonymous"
></script>
</>
);
}
}
export default Clasificacion;