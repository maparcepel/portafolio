import {
    Redirect,
    Route,
    HashRouter as Router,
    Switch,
} from 'react-router-dom';

import Grability from './components/Grability';
import { MasSobreMi } from './components/MasSobreMi';
import { Contacto } from './components/parts/Contacto';
import { NavBar } from './components/parts/NavBar';
import { Portafolio } from './components/parts/Portafolio';
import { SobreMi } from './components/SobreMi';


const AppRouter = () => {
    return (
        <Router>
            <div className='d-flex flex-column justify-content-between main-container mt-2'>

                <div>
                    <NavBar />

                    <Switch>
                        <Route exact path="/" component={Portafolio} />
                        <Route exact path="/Grability" component={Grability} />
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
