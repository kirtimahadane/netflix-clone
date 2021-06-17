import React from 'react';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import *  as ROUTES from './constants/routes';
//import Home from './pages/home';
import {Home, Browse , Signin, Signup} from './pages';
export function App(){
    return(
        <Router>
        <Switch>
        <Route path={ROUTES.SIGN_IN}>
        <Signin/>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
        <Signup/>
        </Route>
        <Route path={ROUTES.BROWSE}>
       <Browse/>
        </Route>
        <Route  exact path={ROUTES.HOME}>
        <Home/>
        </Route>
        </Switch>
        </Router>
    );
}