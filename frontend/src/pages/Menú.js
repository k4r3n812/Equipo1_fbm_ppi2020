import React, { Component } from 'react';
import '../Estilos/Menu.css';
import  Menuenbarra from '../components/Menuenbarra';
import  Menu from '../components/Menu';
import { Link }  from 'react-router-dom';
import usuario  from '../imagenes/usuario.png';

class Menú extends Component {
    
    render() { 
        return ( 
          <>
          <h1>Menú</h1>
         
<Menuenbarra/>
<section className='usuario'><Link to='/salirapp' id="miboton" href="#"><img alt="Boton"  src={usuario}/></Link></section>
<Menu/>
  </>
         );
    }
}
 
export default Menú;