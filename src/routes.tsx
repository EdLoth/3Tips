import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Importando css utilizados na pagina
import "./global.css"

//Importando Paginas para as rotas
import Home from './Pages/Home';
import Index from './Pages/Index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Play from './Pages/Play';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/index" component={Index}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register} />
                <Route path="/Play" component={Play}/>
            </Switch>
        </BrowserRouter>
    );
}
