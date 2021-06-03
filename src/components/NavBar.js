import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Marcel Molina
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"
                    >
                        Portafolio
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/SobreMi"
                    >
                        Sobre mí
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/MasSobreMi"
                    >
                        Más sobre mí
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Contacto"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>

            
        </nav>
    )
}