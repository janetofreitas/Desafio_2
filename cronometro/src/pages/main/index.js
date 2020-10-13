import React, { Component } from 'react';
import { render } from 'react-dom';
import api from '../../Services/api';

export default class Main extends Component{
    
    /*componentDidMount(){
        this.loadProducts();
    }
    
    loadProducts = async() =>{
        const response = await api.get('/products');
    
        console.log(response.data.docs);
    }*/
    
    render(){
        return <h1>Porra!</h1>
    }
}