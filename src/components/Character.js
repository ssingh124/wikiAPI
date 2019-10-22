import React, {Component} from 'react';
import './Character.css';

class Character extends Component {
    constructor (props){
        super(props);
        this.addHealth= this.addHealth.bind(this);
        this.addGold= this.addGold.bind(this);
        this.addStemina= this.addStemina.bind(this);
        this.state = {
            health:150,
            stemina:200,
            gold:76
        }

    }
    addHealth() {
        this.setState((prevstate)=>{
            return{
                health: prevstate.health + 10
                   }
                 
        });
      
    }
    addGold() {
        this.setState((prevstate)=>{
            return{
                gold: prevstate.gold + 3
                   }
                 
        });
    }
    addStemina() {
        this.setState((prevstate)=>{
            return{
                stemina: prevstate.stemina + 3
                   }
                 
        });    }
    render(){
    return(
        <div>
            <h2>{this.props.name}'s Bio</h2>
            <p>Race: {this.props.race}</p>
            <p>
                Status: {this.props.status}
            <br />
            (with Health at:{this.state.health},<br /> 
            and Stemina at:{this.state.stemina})
            </p>
            <p>Gold:{this.state.gold}</p>

            <p className={this.props.comment ?"visible":"hidden"}>
            Comment: {this.props.comment}</p>


            <button onClick={this.addHealth}>Add 10 Health</button>
            <button onClick={this.addStemina}>Add 5 Stemina</button>
            <button onClick={this.addGold}>Add 3 Gold</button>
            <hr />
        </div>
    );
    }
}


export default Character;
