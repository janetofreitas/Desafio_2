import React from 'react'
import Botao from '../../Botao'
import LabelCronometro from '../../LabelCronometro'
import {button as buttonStyles} from '../../styles' 


class Contador extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            centesimos: 0,
            segundos: 0,
            minutos: 0,
            horas: 0,
            stop: false,
            nameStop: "Pause",
            parcial: "",
            mudarPag: false
        }
    }

    incrementar(){
        this.setState(
            (state) => {
                if(this.state.stop==false){
                    if (state.centesimos > 99){
                        this.zerarCentesimos()
                        this.incrementarSegundos()
                    }
                    return({centesimos: state.centesimos ++})
                }
            }
        )
    }

    incrementarSegundos(){
        this.setState(
            (state) => {
                if(this.state.stop==false){
                    if (state.segundos > 59){
                        this.zerarSegundos()
                        this.incrementarMinutos()
                    }
                    return({segundos: state.segundos ++})
                }
            }
        )
    }

    incrementarMinutos(){
        this.setState(
            (state) => {
                if(this.state.stop==false){
                    if (state.minutos > 59){
                        this.zerarMinutos()
                        this.incrementarHoras()
                    }
                    return({minutos: state.minutos ++})
                }
            }
        )
    }

    incrementarHoras(){
        this.setState(
            (state) => {
                if(this.state.stop==false){
                    return({horas: state.horas ++})
                }
            }
        )
    }

    zerarCentesimos(){
        this.setState({centesimos: 0})
    }

    zerarSegundos(){
        this.setState({segundos: 0})
    }

    zerarMinutos(){
        this.setState({minutos: 0})
    }

    zerarCronometro(){
        this.setState({
            centesimos: 0,
            segundos: 0,
            minutos: 0,
            horas: 0,
            parcial: ""
        })
    }

    pararTempo(){
        this.setState({
            stop: !this.state.stop
        })
        if (this.state.stop)
                {this.setState({
                    nameStop: "Pause"         
                })}
            else
                {this.setState({
                    nameStop: "Play"         
            })}     
    }

    parcial(){
      let p = this.state.horas + ":" + this.state.minutos + ":" + this.state.segundos + ":" + this.state.centesimos
      this.state.parcial = this.state.parcial + "||" + p 
        
    }

    componentDidMount(){
        this.timer = setInterval( () => this.incrementar(), 10)
    }

    render(){
        return(
            <div>
                    <h1>{this.state.horas}:{this.state.minutos}:{this.state.segundos}.{this.state.centesimos}</h1>
                    <Botao onClick={() => { this.zerarCronometro()}} label="Stop" />
                    <Botao onClick={() => { this.pararTempo()}} label={this.state.nameStop} />
                    <Botao onClick={() => this.parcial()} label={"Parcial"} />
                    <LabelCronometro name={this.state.parcial} />
            </div>
        )
    }
}

export default Contador
