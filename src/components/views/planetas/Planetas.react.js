import React, {Component} from 'react';
import axios from 'axios';

class Planetas extends Component {
    constructor(props){
        super(props);
        this.state = {
            planetas: [],
          }
        }
        componentWillMount(){
            axios.get('https://swapi.co/api/planets/')
              .then((response) => {
                console.log(response)
                this.setState({planetas: response.data.results})
              }).catch((error) => {
                console.log(error)
              });
        }
        render(){
            var planetas = this.state.planetas.map(function(planeta){
                return  <div id="planet-id-'+[i]+'" className="col-sm-6">
                <table className="table">
                    <thead>
                    <th colspan="2">
                        <h4>{planeta.name}</h4>
                    </th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Diametro:</th>
                            <td>{planeta.diameter}</td>
                        </tr>
                        <tr>
                            <th>Clima:</th>
                            <td>{planeta.climate}</td>
                        </tr>
                        <tr>
                            <th>Terreno:</th>
                            <td>{planeta.terrain}</td>
                        </tr>
                        <tr>
                            <th>Superficie de agua:</th>
                            <td>{planeta.surface_water}</td>
                        </tr>
                        <tr>
                            <th>Poblacion:</th>
                            <td>{planeta.population}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            });
            return (
                <div id="plantes">
                <article>
                <header className="planets-cover header-light">
                    <h1 className="container">Planetas</h1>
                </header>
                <div className="container content">
                    <div className="row">
                        {planetas}
                    </div>
                </div>
                <footer className="text-center footer-page footer-page-planets">
                    <a href="" id="prev-planets" className="btn btn-primary">Anterior</a>
                    <a href="" id="next-planets" className="btn btn-primary">Siguiente</a>
                </footer>
            </article>
            </div>
 
            );
        }
}
 
export default Planetas;
