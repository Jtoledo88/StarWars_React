import React, {Component} from 'react';
import axios from 'axios';


class Vehiculos extends Component {
    constructor(props){
        super(props);
        this.state = {
            vehiculos: [],
          }
        }
        componentWillMount(){
            axios.get('https://swapi.co/api/vehicles/')
              .then((response) => {
                console.log(response)
                this.setState({vehiculos: response.data.results})
              }).catch((error) => {
                console.log(error)
              });
        }
        render(){
            var vehiculos = this.state.vehiculos.map(function(vehiculo){
                return  <div id={"vehicle-id-" + vehiculo.length} className="col-sm-6">
                <table className="table">
                    <thead>
                    <th colspan="2">
                        <h4>{vehiculo.name}</h4>
                    </th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Modelo:</th>
                            <td>{vehiculo.model}</td>
                        </tr>
                        <tr>
                            <th>Longitud:</th>
                            <td>{vehiculo.length}m</td>
                        </tr>
                        <tr>
                            <th>Tripulacion:</th>
                            <td>{vehiculo.crew} personas</td>
                        </tr>
                        <tr>
                            <th>Pasajeros:</th>
                            <td>{vehiculo.passengers} pasajeros</td>
                        </tr>
                        <tr>
                            <th>Clase de vehiculo:</th>
                            <td>{vehiculo.vehicle_class}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            });
            return (
                <article id="vehicules">
                <header className="vehicles-cover header-light">
                    <h1 className="container">Vehículos</h1>
                </header>
                <div className="container content">
                    <div className="row">
                        {vehiculos}
                    </div>
                </div>
                <footer className="text-center footer-page footer-page-vehicles">
                    <a href="" id="prev-vehicles" className="btn btn-primary">Anterior</a>
                    <a href="" id="next-vehicles" className="btn btn-primary">Siguiente</a>
                </footer>
            </article>
 
            );
        }
}
 
export default Vehiculos;
