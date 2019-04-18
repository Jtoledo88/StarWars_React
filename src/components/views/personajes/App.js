import React, {Component} from 'react';
import Film from './Film';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            film: {}
        }
    }

    async componentDidMount() {
        //this.getCharacters();
        let d = await this.getPeople();
        this.setState({
            characters: d
        });
    }

    async getPeople() {
        let resp = await fetch('https://swapi.co/api/people/', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        let data = await resp.json();
        return data.results;
    }

    render() {
        const charHTML = this.state.characters.map((c, i) => {
            console.log(c);
            const liHTML = c.films.map((f, i) => {
                return <Film key={"f"+i} url={f} />;
            })

            return <div className="col-md-3" key={"c" + i}>
                <div className="card">
                    <div className="card-title">
                        <h5>{c.name}</h5>
                    </div>
                    <div>
                        <ul>
                            {liHTML}
                        </ul>
                    </div>
                </div>
            </div>
        });
        return (
            <div className="App container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Hola Mundo</h1>
                    </div>
                </div>
                <div className="row">
                    {charHTML}
                </div>
            </div>
        );
    }
}
