import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
    return (       
            <nav id="nav" className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                      <img src='../img/logo-star-wars.svg' alt="Logo Star Wars" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                          <ul id="main-nav" className="navbar-nav ml-auto">
                              <li id="btn-home" className="nav-item text-center active">
                                  <Link className="nav-link" to="/">Home</Link> 
                             </li>
                             <li id="btn-films" className="nav-item text-center">
                                 <Link className="nav-link" to="/peliculas">Peliculas</Link>
                             </li>
                            <li id="btn-people" className="nav-item text-center">
                                <Link className="nav-link" to="/personajes">Personajes</Link> 
                            </li>
                            <li id="btn-planets" className="nav-item text-center">
                                <Link className="nav-link" to="/planetas">Planetas</Link> 
                            </li>
                            <li id="btn-vehicles" className="nav-item text-center">
                                <Link className="nav-link" to="/vehiculos">Vehiculos</Link> 
                            </li>
                            <li id="btn-starships" className="nav-item text-center">
                                <Link className="nav-link" to="/starchips">Starchips</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;