import React from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Masinformación.css';
import Menuenbarra from './Menuenbarra';


const Masinformacion = (props) => {

        return (
    <>
    <div>
   <Menuenbarra/>
   </div>

   <section className='informate'>
     <div classNameName="masinformacion">
       <ul>
 <h5><ol className="amorprop"> <Link to= "/click1" classNameName="botonamor" href="#">Amor propio</Link></ol>

 <ol className="depresion"><Link to="/click2"  classNameName="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Depresión</Link></ol>
  
 <ol className="acosoint"><Link to="/click3" classNameName="dropdown-item" href="#">Acoso por internet</Link></ol>
 <ol className="transtornoali"><Link to= "/click4"classNameName="dropdown-item" href="#">Trastornos de alimentación</Link></ol></h5>
  </ul>
  
  </div>
  </section>

</>
      );
      
    }
    export default Masinformacion;