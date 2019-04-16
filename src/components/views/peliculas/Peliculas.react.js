import React, {Component} from 'react';
import axios from 'axios';

class Peliculas extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculas: [],
          }
        }
        componentWillMount(){
            axios.get('https://swapi.co/api/films/')
              .then((response) => {
                console.log(response)
                this.setState({peliculas: response.data.results})
              }).catch((error) => {
                console.log(error)
              });
        }
        render(){
            var peliculas = this.state.peliculas.map(function(pelicula){
                return <article class="carousel-item" id={"film-id-"+pelicula.episode_id}>
                  <header class="film-cover header-light" style={"background-image:url(img/film-bg-ep-" + pelicula.episode_id+ ".jpg);"}>
                     <h1 class="container">{pelicula.title}</h1>
                 </header>
                 <div class="container content">
                     <div class="row">
                         <aside class="col-md-4">
                             <ul class="list-group">
                                 <li class="list-group-item list-header"><h4>Episode {pelicula.episode_id}</h4></li>
                                 <li class="list-group-item"><i class="fa fa-bullhorn" aria-hidden="true"></i> {pelicula.director}</li>
                                 <li class="list-group-item"><i class="fa fa-ticket" aria-hidden="true"></i> {pelicula.producer}</li>
                                 <li class="list-group-item"><i class="fa fa-calendar" aria-hidden="true"></i>  {pelicula.release_date} Fecha</li>
                             </ul>
                         </aside>
                         <div class="col-md-8">
                             <h3>Sinopsis</h3>
                             <p>{pelicula.opening_crawl}</p>
                             <h3>Personajes</h3>
                             <ul class="row">
                {/* for(j=0;j<pelicula.characters.length;j++){
                    filmData +=  loadCharacterFilm(pelicula.characters[j]);
                }; */}
                             </ul>
                         </div>
                     </div>
                 </div>
                </article>
            });
            return (
               
                <div id="swCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
            
                    </ol>
                    <div class="carousel-inner" id="film-list">
                        
                        {peliculas}
                    </div>
                    <a class="carousel-control-prev" href="#swCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#swCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
           
            );
        }
}
 
export default Peliculas;
