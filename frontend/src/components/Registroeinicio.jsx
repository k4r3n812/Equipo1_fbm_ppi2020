import React from 'react';
import { Link }  from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
const Registroeinicio = (props) => {
        return (
    <>
    <div>
    <Login/>
    </div>
    <div>
<Register/>
</div>
</>
      );
      
    }
    export default Registroeinicio ;