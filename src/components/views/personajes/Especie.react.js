import React, { Component } from 'react';
import axios from 'axios';

class Especies extends Component {
    constructor(props){
        super(props)

        this.state = {
            especies: {},
            url: this.props.url,
        }

        this.getDetailEspecie(this.state.url);
    }

    getDetailEspecie = (url) => {
        axios.get(url)
            .then((response) => {
                //console.log(response);
                this.setState({ especie: response.data });
            }).catch((error) => {
                console.log(error)
            })
    }
    render(){
        return <p key={ this.state.especie.id }>{ this.state.especie.name }</p>;
    }
}

export default Especies;