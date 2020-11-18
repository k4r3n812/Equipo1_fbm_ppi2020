import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 


class Register extends Component {
    
    render() { 
        return (
          <>
          <h1>Registro</h1>
            <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Documento de identidad</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
  </div>

 
  <div className="form-row">
    
    <div className="form-group col-md-4">
      <label for="inputState">Género</label>
     <select>
        <option selected>Femenino</option>
        <option selected>Masculino</option> 
        </select>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">Edad</label>
     <select>
        <option selected>5</option>
        <option selected>6</option> 
        <option selected>7</option> 
        <option selected>8</option> 
        <option selected>9</option> 
        <option selected>10</option> 
        <option selected>11</option> 
        <option selected>12</option> 
        <option selected>13</option> 
        <option selected>14</option> 
        <option selected>15</option> 
        <option selected>16</option> 
        <option selected>17</option> 
        <option selected>18</option> 
        <option selected>19</option> 
        <option selected>20</option>
        <option selected>21</option>
        <option selected>22</option>  
        <option selected>23</option>
        <option selected>24</option>   
        <option selected>25</option>
        <option selected>26</option>
        <option selected>27</option>
        <option selected>28</option>
        <option selected>29</option>
        <option selected>30</option>
        <option selected>31</option>
        <option selected>32</option>
        <option selected>33</option>
        <option selected>34</option>
        <option selected>35</option>
        <option selected>36</option>
        <option selected>37</option>
        <option selected>38</option>
        <option selected>39</option>
        <option selected>40</option>
        <option selected>41</option>
        <option selected>42</option>
        <option selected>43</option>
        <option selected>44</option>
        <option selected>45</option>

        </select>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">Cargo</label>
     <select>
        <option selected>Estudiante</option>
        <option selected>Psicólogo</option> 
        <option selected>Coordinador</option> 
        </select>
    </div>
    
  </div>
  <Link to ="/entremos"><button type="submit" className="btn btn-lg btn-primary btn-flex mb-3 col-6" >Registrarse</button></Link>
  <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
</form>
</>
        );
    
    }}
    export default Register;