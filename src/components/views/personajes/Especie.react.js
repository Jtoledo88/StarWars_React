import React, { Component } from 'react';
import axios from 'axios';

export default class Especie extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            especie: {},
        }
    }
    
    componentDidMount(){
          this.getEspecie(this.props.url);
    }

 /*   getEspecie(url){
        this.setState({ loading: true })
            fetch(url)
                .then(resp => resp.json())
                .then(data => this.setState({especie: data, loading: false }));
    }
*/
    getEspecie = (url) => {
        axios.get(url)
            .then((response) => {
                //console.log(response)
                this.setState({
                    especie: response.data,
                    loading: false,
                });
            }).catch((error) => {
            console.log(error)
        })
    };
    
    
    render(){
         if(this.state.loading) {
            return "cargando...";
        }else{
            return this.state.especie.name;
        }
      
    }
}
