import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const NavBar = () => {
    const location = useLocation()
    return (
        <nav className="navbar navbar-expand-md navbar-dark ">
            <div className="container-fluid d-flex justify-content-between">
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/"
                            >
                                Proyectos
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/Grability"
                            >
                                Grability
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

                            <Link
                                className="nav-item nav-link"
                                to="#contacto"
                            >
                                Contacto</Link>


                        </div>
                    </div>
                </div>
                {location.pathname !== '/' &&
                    <div className='align-self-baseline animate__animated animate__fadeIn'>
                        <img id='logo-small' src='/assets/logo-small.png' alt='Marcel Molina'></img>
                    </div>
                }
            </div>
        </nav>
    )
}