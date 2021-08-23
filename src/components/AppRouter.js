import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import { SobreMi } from './SobreMi';
import { MasSobreMi } from './MasSobreMi';
import { Portafolio } from './Portafolio';
import { NavBar } from './NavBar';


const AppRouter = () => {
    return ( 
        <Router>
            
            <NavBar />
            
            <Switch>
                <Route exact path="/" component={ Portafolio } />

                <Route exact path="/SobreMi" component={ SobreMi } />
                <Route exact path="/MasSobreMi" component={ MasSobreMi } />
                
                <Redirect to="/" />

            </Switch>
                
            
        </Router>
    )
}

export default AppRouter;