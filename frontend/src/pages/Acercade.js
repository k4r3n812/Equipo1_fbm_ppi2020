import React, { Component } from 'react';

import '../Estilos/Acercade.css';

class Acercade extends Component {
    
    render() { 
        return (
    <>
   <h1>Acerca de</h1> 

 <h2 className='chat' > Chat</h2>
 <p className='chat'> Encontrará todos los chats de los estudiantes que solicitan una asesoría</p>
 <h2 className='acerca'>Acerca de </h2>
 <p className='acerca'>Este  botón sirve para ver cuál es la funcion de el resto  de los botones </p>
 <h2 className='quien'>Quienes somos</h2>
 <p className='quien'>Este te ayudara a visualizar a los integrantes del equipo</p>
 <h2 className='info'>Más información</h2>
 <p className='info'>Se encontrará mas información sobre el proyecto</p>
 <h2 className='sigui'>Siguiente</h2>
 <p className='sigui'>Este boton te llevara al registro y/o inicio</p></>
      );
      
    }}
    export default Acercade;