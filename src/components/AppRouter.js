import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import './styles.css';
import { SobreMi } from './SobreMi';
import { MasSobreMi } from './MasSobreMi';
import { Portafolio } from './Portafolio';
import { NavBar } from './NavBar';


const AppRouter = () => {
    return ( 
        <Router>
            <div>
                
                <NavBar />

                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={ Portafolio } />

                        <Route exact path="/SobreMi" component={ SobreMi } />
                        <Route exact path="/MasSobreMi" component={ MasSobreMi } />
                        
                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;