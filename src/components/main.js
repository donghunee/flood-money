import React from 'react';
import Input from './input'
import './main.css';
import { Button } from 'react-bootstrap';
import CountUp from 'react-countup';

class Main extends React.Component {

  state = {
    start : 0,
    end : 0
  }

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

    render() {
    

    return(
      <div className="wrap">
        <span className="money-title">현재 금액</span><br />
        <span className="money"><CountUp separator="," duration={1} start={this.props.preMoney} end={this.props.currentMoney} />원</span>
        <div className="wrap-item">
          <div className="add">
            <span className="item-title">입금</span><br />
            <span className="item-money">{this.numberWithCommas(this.props.plus)}원</span>
          </div>
          <div className="minus">
            <span className="item-title">출금</span><br />
            <span className="item-money">{this.numberWithCommas(this.props.minus)}원</span>
          </div>
        </div>
        <div className="line" />
        <div className="wrap-button">
          <Button className="plus-button" variant="primary" onClick={this.props.handleClickPlus}><span>+</span></Button>
          <Button className="minus-button" variant="dark" onClick={this.props.handleClickMinus}><span>-</span></Button>
        </div>
        {this.props.active && <Input handleSubmit={this.props.handleSubmit} type = {this.props.type} />}
      </div>
    )
  }
}

export default Main;
