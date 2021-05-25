import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand"> useContext </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/" className="nav-item nav-link"> Portafolio </NavLink>
                    <NavLink exact activeClassName="active" to="/SobreMi" className="nav-item nav-link"> Sobre Mí </NavLink>
                    <NavLink exact activeClassName="active" to="/MasSobreMi" className="nav-item nav-link"> Más Sobre Mí</NavLink>
                </div>
            </div>
        </nav>
    )
}
