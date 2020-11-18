import React from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Menu.css';
import usuario  from '../imagenes/usuario.png';

const MenúEnsayo = (props) => {

        return (
    <>
 <div className="album py-5 bg-light">
    <div className="cargChat">
      <div className="row">
        <div className="chat">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={usuario} alt="" width="150" height="150"/>
            <div className="card-body">
            <Link to='/chat'> <button  type="button" className="btn btn-sm btn-outline-primary">Chat</button></Link>         
              <div className="d-flex justify-content-between align-items-center ">
                <div className="btn-group">    
                </div>  
              </div>
            </div>
          </div>
     </div>     
      </div>
    </div>
  </div>

  <div className="album py-5 bg-light">
    <div className="cargquienes">
      <div className="row">
        <div className="chat">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={usuario} alt="" width="150" height="150"/>
            <div className="card-body">
            <Link to='/chat'> <button  type="button" className="btn btn-sm btn-outline-primary">¿Quienes somos?</button></Link>         
              <div className="d-flex justify-content-between align-items-center ">
                <div className="btn-group">    
                </div>  
              </div>
            </div>
          </div>
     </div>     
      </div>
    </div>
  </div>


  <div className="album py-5 bg-light">
    <div className="cargmasInfo">
      <div className="row">
        <div className="chat">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={usuario} alt="" width="150" height="150"/>
            <div className="card-body">
            <Link to='/chat'> <button  type="button" className="btn btn-sm btn-outline-primary">Más Información</button></Link>         
              <div className="d-flex justify-content-between align-items-center ">
                <div className="btn-group">    
                </div>  
              </div>
            </div>
          </div>
     </div>     
      </div>
    </div>
  </div>

  <div className="album py-5 bg-light">
    <div className="cardAcerca">
      <div className="row">
        <div className="chat">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={usuario} alt="" width="150" height="150"/>
            <div className="card-body">
            <Link to='/chat'> <button  type="button" className="btn btn-sm btn-outline-primary">Acerca de</button></Link>         
              <div className="d-flex justify-content-between align-items-center ">
                <div className="btn-group">    
                </div>  
              </div>
            </div>
          </div>
     </div>     
      </div>
    </div>
  </div>

</>
      );
      
    }
    export default MenúEnsayo;
