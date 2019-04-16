import React, {Component} from 'react';

import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            films: [],
            url: 'https://swapi.co/api/films/',
        }

        this.getFilms(this.state.url);
    }

    getFilms = (url) => {
        axios.get(url)
            .then((response) => {
                console.log(response);
                this.setState({films: response.data.results});
            }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        let films = this.state.films.map(function (film,i) {
            let classFlexRow = '';
            let resto = (i + 1) % 2;
            if (resto === 0) {
                classFlexRow = "flex-row-reverse"
            } else {
                classFlexRow = "flex-row"
            }
            return <article id={"home-ep-" + film.episode_id}
                            className={"film d-flex align-items-center flex-wrap " + classFlexRow + " no-gutters"}>
                <div className="col-lg-5 col-film-image">
                    <img src={"../img/film-episode-" + film.episode_id + ".jpg"} alt={"Episode" + film.episode_id}
                         className="img-fluid"/>
                </div>
                <div className="col-lg-7 col-film-info">
                    <div className="col-10 offset-1">
                        <header className="header-light">
                            <h2 className="film-name">{film.title}</h2>
                            <h5 className="film-episode">Episode {film.episode_id}: <small className="film-director"><i
                                className="fa fa-bullhorn" aria-hidden="true"></i> {film.director}</small> | <small
                                className="film-producer"><i className="fa fa-ticket"
                                                             aria-hidden="true"></i>{film.producer}</small> | <small
                                className="film-date"><i className="fa fa-calendar"
                                                         aria-hidden="true"></i> {film.release_date}</small></h5>
                        </header>
                        <p className="film-synopsis">{film.opening_crawl} <a href={film.url}
                                                                             id={"btn-ep-" + film.episode_id}
                                                                             className="btn btn-sm btn-primary"
                                                                             data-toggle="modal" data-target={"#swModal"+i}
                                                                             data-title={film.title}
                                                                             data-cover={film.episode_id}
                                                                             data-crawler={film.opening_crawl}
                                                                             data-episode={"Episode" + film.episode_id}
                                                                             data-director={film.director}
                                                                             data-producer={film.producer}
                                                                             data-release={film.release_date}>Ver
                            mas...</a></p>
                    </div>
                </div>

                <div className="modal fade" id={"swModal"+i } tabIndex="-1" role="dialog" aria-labelledby="swModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-episode" id="swModalLabel">Star Wars Films</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-cover"> <img className="image" src={"../img/film-bg-ep-" + film.episode_id + ".jpg"} alt={"Episode" + film.episode_id}/></div>
                            <div className="modal-body">
                                <h4 className="modal-title">{film.title}</h4>
                                <p className="modal-crawler">{film.opening_crawl}</p>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item"><i className="fa fa-bullhorn" aria-hidden="true"></i>
                                    <span
                                        className="modal-director">{film.director}</span></li>
                                <li className="list-group-item"><i className="fa fa-ticket" aria-hidden="true"></i>
                                    <span
                                        className="modal-producer">{film.producer}</span></li>
                                <li className="list-group-item"><i className="fa fa-calendar" aria-hidden="true"></i>
                                    <span
                                        className="modal-release">{film.release_date}</span></li>
                            </ul>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal"
                                        id="btn-all-films">Ver todas las peliculas
                                </button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </article>

        });
        return (<section>

                {films}


            </section>
        );

    }
}

export default Home;
