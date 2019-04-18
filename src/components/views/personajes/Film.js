import React, {Component} from 'react';

export default class Film extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            film: {},
        }
    }

    componentDidMount() {
        this.getFilm(this.props.url)
    }

    getFilm(url){
        this.setState({
            loading: true
        })
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({film: data, loading: false }));
    }

    render(){
        if(this.state.loading) {
            return <li>{"cargando..."}</li>;
        }else{
            return <li>{this.state.film.title}</li>;
        }
    }
}