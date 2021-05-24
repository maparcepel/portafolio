import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

  import { SobreMi } from './SobreMi';
import { MasSobreMi } from './MasSobreMi';
import { Home } from './Home';

const AppRouter = () => {
    return ( 
        <Router>
            <div>
                
                {/* <NavBar /> */}

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ Home } />

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