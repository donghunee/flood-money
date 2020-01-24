import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import Dash from './components/dash'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  

  state = {
    id: 0,
    preMoney:0,
    currentMoney:0,
    plus:0,
    minus:0,
    item : [],
    active : false,
    type: ""
  }

  componentWillMount() {

    let state = localStorage.getItem('state')
    console.log(JSON.parse(state))
    if( state != null){
      this.setState(JSON.parse(state));
    }
  }

  saveItem = () => {
    localStorage.setItem('state',JSON.stringify(this.state))
  }

  _handleClickMinus = () => {
    this.setState({
      type:"minus",
      active: !this.state.active
    },this.saveItem)
  }  

  _handleClickPlus = () => {
    this.setState({
      type:"plus",
      active: !this.state.active
    },this.saveItem)
  }  

  _handleRemove = (id) => {
    const { item } = this.state
    let result = item.filter(it => it.id == id)[0]
    this.setState({
      item: item.filter(it => it.id !== id),
      preMoney: this.state.currentMoney,
      currentMoney: result.type == "plus"? this.state.currentMoney - result.money : this.state.currentMoney + result.money,
      [result.type]: result.type == "plus"? this.state.plus - parseInt(result.money) : this.state.minus - parseInt(result.money)
    },this.saveItem);
  }
  
  _handleSubmit = (info) => {
    this.setState({
      preMoney: this.state.currentMoney,
      currentMoney: info.type == "plus"? this.state.currentMoney + parseInt(info.money) : this.state.currentMoney - parseInt(info.money),
      [info.type] : info.type == "plus"? this.state.plus + parseInt(info.money) : this.state.minus + parseInt(info.money),
      active: false,
      item: [{
        id: this.state.id++,
        title: info.memo,
        money: parseInt(info.money),
        type : this.state.type,
        date: new Date()
      }].concat(this.state.item)
    },this.saveItem)
  }

  render() {
    return(
      <div style={{textAlign:"center"}}>
        <img src="https://flood-master.s3.ap-northeast-2.amazonaws.com/59145380.png" width="30%" />
        <Main 
          active={this.state.active} 
          handleSubmit = {this._handleSubmit}
          handleClickPlus = {this._handleClickPlus}
          handleClickMinus = {this._handleClickMinus}
          type={this.state.type}
          currentMoney = {this.state.currentMoney}
          preMoney = {this.state.preMoney}
          plus = {this.state.plus}
          minus = {this.state.minus}
        />
        <Dash 
          item = {this.state.item}
          onRemove = {this._handleRemove}
        />
      </div>
    )
  }
}

export default App;
