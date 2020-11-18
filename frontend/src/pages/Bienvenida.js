import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Bienvenida.css';
import bienvenido from '../imagenes/bienvenido.png';

class Bienvenida extends Component {
    
    render() { 
        return (
      <>
   <h1 className='letra' >Bienvenido  </h1>
   <h2 className='letrah2'>Psico-Félix</h2> 
      <section ><img className='logo'src={bienvenido}/></section>
<Link to= "/siguiente"  className="siguiente btn-warning btn-lg active" role="button" aria-pressed="true">Siguiente</Link>
                                </>
      );
      
    }}
    export default Bienvenida;