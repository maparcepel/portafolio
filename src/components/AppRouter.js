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
import { Contacto } from './Contacto';


const AppRouter = () => {
    return (
        <Router>
            <div className='d-flex flex-column justify-content-between main-container mt-2'>

                <div>
                    <NavBar />

                    <Switch>
                        <Route exact path="/" component={Portafolio} />

                        <Route exact path="/SobreMi" component={SobreMi} />
                        <Route exact path="/MasSobreMi" component={MasSobreMi} />

                        <Redirect to="/" />

                    </Switch>
                </div>

                <div id='contacto'>
                    <Contacto />
                </div>

            </div>


        </Router>
    )
}

export default AppRouter;