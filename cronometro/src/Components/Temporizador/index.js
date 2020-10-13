import React, { Component } from 'react'

import {button as buttonStyles} from '../../styles' 

class Temporizador extends Component {
  state = {
    tempo: 0,
    funcionando: false,
  }

  _tempo = null
  _ultimoNumero = 0

  handleChange = ({target: {value}}) => {
    this._ultimoNumero = Number(value)
    this.resetar()
  }

  handleRunClick = () => {
    if (this.state.funcionando) {
      this.parar()
    } else {
      this.começar()
    }
  }

  handleClearClick = () => {
    this.parar()
    this.resetar()
  }

  começar() {
    this._tempo = setInterval(() => {
      const {tempo} = this.state
      const novoTempo = tempo - 1
      if (novoTempo < 0) {
        this.parar()
        this.resetar()
      } else {
        this.setState({tempo: novoTempo})
      }
    }, 1000)

    this.setState({funcionando: true})
  }

  parar() {
    clearInterval(this._tempo)
    this._tempo = null
    this.setState({funcionando: false})
  }

  resetar() {
    this.setState({tempo: this._ultimoNumero})
  }

  render() {
    const {tempo, funcionando} = this.state
    const inputStyles = {
      fontSize: '5em',
      textAlign: 'center',
      border: 'none',
      background: 'none',
      outline: 'none',
      maxWidth: 360,
      height: 90,
    }
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{maxWidth: 400, margin: 'auto'}}>
          <input style={inputStyles} onChange={this.handleChange} value={tempo || '0'} type="number" />
         {tempo === 0 
         ? <h1>Acabou o Tempo!</h1>
         : <h1>Tempo Restante</h1>
         }
        </div>
        <button style={buttonStyles} onClick={this.handleRunClick} data-test="toggle">{funcionando ? 'Pausar' : 'Começar'}</button>
        <button style={buttonStyles} onClick={this.handleClearClick} data-test="clear">Reset</button>
      </div>
    )
  }
}
  export default Temporizador
