import React from 'react'
import {button as buttonStyles} from './styles' 

const Botao = (props) =>(
<button style={buttonStyles} onClick={props.onClick}>{props.label}</button>
)

export default Botao