import React from 'react'
import Botao from '../../Botao'
import LabelCronometro from '../../LabelCronometro'
import Contador from '../Contador'

 class Relogio extends React.Component{


     constructor(props){
        super(props)
        this.state = {
            time: new Date(),
            timeUS: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/New_York' }),
            timeJP: new Date().toLocaleTimeString('pt-BR', { timeZone: 'Asia/Tokyo' })
        }
     }

     tick() {
        this.setState({
          time: new Date(),
          timeUS: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/New_York' }),
          timeJP: new Date().toLocaleTimeString('pt-BR', { timeZone: 'Asia/Tokyo' })
        });
     }

       componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
       }

     componentWillUnmount() {
        clearInterval(this.timerID);
     }

     render(){
        return(
            <div>
                    <h1>Salvador:</h1>
                    <h1>{this.state.time.toLocaleTimeString()}</h1>
                    <h1>Estados Unidos:</h1>
                    <h1>{this.state.timeUS}</h1>
                    <h1>Japão:</h1>
                    <h1>{this.state.timeJP}</h1>        
            </div>
        )
     }
}

export default Relogio