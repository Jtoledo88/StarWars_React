import React, {Component} from 'react';
import axios from 'axios';



class Starchips extends Component {
    constructor(props){
        super(props);
        this.state = {
            starchips: [],
          }
        }
        componentWillMount(){
            axios.get('https://swapi.co/api/starships/')
              .then((response) => {
                console.log(response)
                this.setState({starchips: response.data.results})
              }).catch((error) => {
                console.log(error)
              });
        }
        render(){
            var starchips = this.state.starchips.map(function(starchip){
                return  <div id="starship-id-'+[i]+'" className="col-sm-6">
                             <table className="table">
                                <thead>
                                    <th colspan="2">
                                        <h4>{starchip.name}</h4>
                                   </th>
                               </thead>
                           <tbody>
                                <tr>
                                  <th>Modelo:</th>
                                  <td>{starchip.model}</td>
                               </tr>
                               <tr>
                                   <th>Fabricante:</th>
                                  <td>{starchip.manufacturer}</td>
                               </tr>
                              <tr>
                                 <th>Tripulacion:</th>
                                 <td>{starchip.crew}</td>
                              </tr>
                              <tr>
                                  <th>Pasajeros:</th>
                                  <td>{starchip.passengers}</td>
                              </tr>
                            </tbody>
                            </table>
                         </div>
            });
            return (
                   <article id="starchips">
        <header className="starships-cover header-light">
            <h1 className="container">Cruceros Espaciales</h1>
        </header>
        <div className="container content">
            <div className="row">
                {starchips}
            </div>
        </div>
        <footer class="text-center footer-page footer-page-starships">
            <a href="" id="prev-starships" class="btn btn-primary">Anterior</a>
            <a href="" id="next-starships" class="btn btn-primary">Siguiente</a>
        </footer>
    </article>
 
            );
        }
}
 
export default Starchips;
