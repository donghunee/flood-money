import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import Dash from './components/dash'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  state = {
    currentMoney:0,
    plus:0,
    minus:0,
    item : [
      {
        date : "",
        title: "",
        money :""
      }
    ],
    active : false,
    type: "" 
  }

  _handleClickMinus = () => {
    this.setState({
      type:"minus",
      active: !this.state.active
    })
  }  

  _handleClickPlus = () => {
    this.setState({
      type:"plus",
      active: !this.state.active
    })
  }  

  _handleSubmit = (info) => {
    this.setState({
      currentMoney: info.type == "plus"? this.state.currentMoney + parseInt(info.money) : this.state.currentMoney - parseInt(info.money),
      [info.type] : info.type == "plus"? this.state.plus + parseInt(info.money) : this.state.minus + parseInt(info.money)  
    })
  }

  _image = () => {
    return "dw"
  }

  render() {
    return(
      <div style={{textAlign:"center"}}>
        <img src="./flood.png" width="30%" />
        <Main 
          active={this.state.active} 
          handleSubmit = {this._handleSubmit}
          handleClickPlus = {this._handleClickPlus}
          handleClickMinus = {this._handleClickMinus}
          type={this.state.type}
          currentMoney = {this.state.currentMoney}
          plus = {this.state.plus}
          minus = {this.state.minus}
        />
        <Dash />
      </div>
    )
  }
}

export default App;
