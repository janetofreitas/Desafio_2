import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Components/Contador'
import LabelCronometro from './LabelCronometro'
import Botao from './Botao'
import Header from './Components/Header'
import './styles.css';
import Relogio from './Components/Relogio';
import Temporizador from './Components/Temporizador';
import moment from 'moment'


import Main from './pages/main'

class App extends Component {


 

    render(){
      return(
    <div className = "App">
      <Header/>
      <br></br>
      <LabelCronometro name="Relógio"/>
      <Relogio />
      <br></br>
      <LabelCronometro name="Cronômetro"/>
      <Contador />
      <LabelCronometro name="Temporizador"/>
      <Temporizador/>
    </div>
    )}};


export default App;