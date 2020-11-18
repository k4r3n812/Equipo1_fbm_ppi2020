import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import logopsico  from '../imagenes/logopsico.jpeg';
import '../Estilos/olvidarcontraseña.css';

class Olvidarcontraseña extends Component {
    
    render() {
        return (
         <>
      
  <form>
  <div class="form-group">
  <h1 >Recuperar cuenta</h1>
  <section className='logo'><img src={logopsico}/></section>
    <label for="exampleInputEmail1">Documento de identidad</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div> <div class="form-group">
    <label for="exampleInputPassword1">Nueva contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirma contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Verificar</label>
  </div> 
  <Link to ="/recuperar"><button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Continuar</button>  </Link>

</form>
  
  
</>

          ); 
        }
    }


 
export default Olvidarcontraseña;