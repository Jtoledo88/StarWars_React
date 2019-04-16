import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/peliculas">Pelis</Link></li>
                <li><Link to="/personajes">person</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/peliculas" component={Peliculas} />
            <Route path="/personajes" component={Personajes} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const Peliculas = () => (
    <div>
        <h2>Pelis</h2>
    </div>
);

const Personajes = () => (
    <div>
        <h2>Person</h2>
    </div>
);

export default App;