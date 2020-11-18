import React, { Component } from 'react';
import '../Estilos/Login.css';
import {Link} from 'react-router-dom'; 


class Login extends Component {
    
    render() {
        return (
          <>
         
   <div className="iniciosesion">
    <form className="form-signin text-center align-items-center col-6">
    <h1 className=" text-center ">Inicie Sesión</h1>
    <label for="inputEmail" className="sr-only mb-3">Documentode identidad</label>
    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email " required="" autofocus=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me</label>
<div>
      <Link to= "/olvidaste"classNameName="dropdown-item " href="#">¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
    <Link to="/menu">
    <button className="login btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Iniciar Sesión</button>
    </Link>
    
    </form>
  </div>
  
</>

          ); 
        }
    }


 
export default Login;