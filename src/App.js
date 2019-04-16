import React, { Component } from 'react';
import './components/style.css';
import { BrowserRouter, Route } from 'react-router-dom';

// NavBar

import NavBar from './components/NavBar.react';

import Home from './components/views/home/Home.react';
import Peliculas from './components/views/peliculas/Peliculas.react';
import Personajes from './components/views/personajes/Personajes.react';
import Planetas from './components/views/planetas/Planetas.react';
import Vehiculos from './components/views/vehiculos/Vehiculos.react';
import Starchips from './components/views/starchips/Starchips.react';


//Para meter info de la API

class App extends Component {

  render() {
    return (
      <div className="App">
         {/* Parte para el NavBar */}
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/peliculas" component={Peliculas} />
                    <Route path="/personajes" component={Personajes} />
                    <Route path="/planetas" component={Planetas} />
                    <Route path="/vehiculos" component={Vehiculos} />
                    <Route path="/starchips" component={Starchips} />
                </div>
            </BrowserRouter>  

      </div>
    );
  }
}


export default App;