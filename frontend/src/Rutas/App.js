import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Depresión from '../pages/Depresión';
import Amorpropio from '../pages/Amorpropio';
import Registremonos from '../pages/Resgistremonos';
import Acosoporinternet  from '../pages/Acosoporinternet';
import Trastornosdealimentación  from '../pages/Trastornosdealimentación';
import Menú from '../pages/Menú';
import Olvidarcontraseña from '../pages/Olvidarcontraseña';
import Másinformacion from '../pages/Másinformacion';
import Tiposdeconflicto from '../pages/Tiposdeconflicto';
import Clasificacion from '../pages/Clasificacion';
import QuienesSomos from '../pages/QuienesSomos';
import Acercade from '../pages/Acercade';
import SalirdelaApp from '../pages/SalirdelaApp';
import MenúEnsayo from '../components/MenúEnsayo';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/click1" component={Amorpropio} />
                <Route path="/siguiente" component={Registremonos} />
                <Route path="/click2" component={Depresión} />
                <Route path="/click3" component={Acosoporinternet} />
                <Route path="/click4" component={Trastornosdealimentación} />
                <Route path="/olvidaste" component={Olvidarcontraseña} />
                <Route path="/abandono" component={Registremonos} />
                <Route path="/regresar" component={Menú} />
                <Route path="/menu" component={Menú} />
                <Route path="/entremos" component={Menú} />
                <Route path="/recuperar" component={Menú} />
                <Route path="/masinfo" component={Másinformacion} />
                <Route path="/chat" component={Tiposdeconflicto} />
                <Route path="/clasifica" component={Clasificacion} />
                <Route path="/quienes" component={QuienesSomos} />
                <Route path="/acercad" component={Acercade} />
                <Route path="/salirapp" component={SalirdelaApp} />

                <Route path="/ensayo" component={MenúEnsayo} />
            </Switch>
             </BrowserRouter>

    )
}
export default App;
