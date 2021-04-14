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

//importando as Tips
import tip1 from './Pages/tips/tip1'
import tip2 from './Pages/tips/tip2'
import tip3 from './Pages/tips/tip3'
import tip4 from './Pages/tips/tip4'
import tip5 from './Pages/tips/tip5'
import tip6 from './Pages/tips/tip6'
import tip7 from './Pages/tips/tip7'
import tip8 from './Pages/tips/tip8'
import tip9 from './Pages/tips/tip9'
import tip10 from './Pages/tips/tip10'


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/index" component={Index}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register} />
                <Route path="/Play" component={Play}/>

                <Route path="/tip1" component={tip1}/>
                <Route path="/tip2" component={tip2}/>
                <Route path="/tip3" component={tip3}/>
                <Route path="/tip4" component={tip4}/>
                <Route path="/tip5" component={tip5}/>
                <Route path="/tip6" component={tip6}/>
                <Route path="/tip7" component={tip7}/>
                <Route path="/tip8" component={tip8}/>
                <Route path="/tip9" component={tip9}/>
                <Route path="/tip10" component={tip10}/>
            </Switch>
        </BrowserRouter>
    );
}
