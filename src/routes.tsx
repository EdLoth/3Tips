import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Importando css utilizados na pagina
import "./global.css"

//Importando Paginas para as rotas
import Home from './Pages/Home';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
            </Switch>
        </BrowserRouter>
    );
}
