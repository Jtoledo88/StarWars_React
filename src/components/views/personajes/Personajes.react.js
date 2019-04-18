import React, {Component} from 'react';
import axios from 'axios';
import Especie from './Especie.react.js'
import Film from './Film.js'

class Personajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personajes: [],
            film: {},
            especie: {},
            url: 'https://swapi.co/api/people/',
            next: '',
            prev: '',
        }
    }

    componentDidMount() {
        this.getPersonajes(this.state.url);
    }

    getPersonajes = (url) => {
        axios.get(url)
            .then((response) => {
                //console.log(response)
                this.setState({
                    personajes: response.data.results,
                    next: response.data.next,
                    prev: response.data.previous,
                });
            }).catch((error) => {
            console.log(error)
        })
    };

    render() {
        const personajes = this.state.personajes.map((personaje, i) => {
            const specie = personaje.species.map((sp, i) => {
                console.log(sp);
                return <Especie key={"sp"+i} url={sp}/>;
            })
            const films = personaje.films.map((f, i) => {
                return <Film key={"f"+i} url={f} />;
            })
            return <article key={i} className="col-sm-6" id="film-id-'+[+people+1]+'">
                <div className="card">
                    <img className="card-img-top"
                         src={"../img/people/" + personaje.name.split(" ").join('') + ".jpg"}
                         alt={personaje.name}/>
                    <div className="card-body">
                        <h4>{personaje.name}</h4>
                        <h5>Especie: {specie} </h5>
                        <h5>Peliculas: </h5>
                             <ul>
                            {films}
                        </ul>
                    </div>
                </div>
            </article>

        });
        return (

            <article>
                <header className="people-cover header-light">
                    <h1 className="container">Personajes</h1>
                </header>
                <div className="container content">
                    <div className="row">
                        {personajes}

                    </div>
                </div>
                <footer className="text-center footer-page footer-page-people">
                    <button id="prev-people" className="btn btn-primary"
                            onClick={this.getPersonajes.bind(this, this.state.prev)}>Anterior
                    </button>
                    <button id="next-people" className="btn btn-primary"
                            onClick={this.getPersonajes.bind(this, this.state.next)}>Siguiente
                    </button>
                </footer>
            </article>


        );
    }
}

export default Personajes;