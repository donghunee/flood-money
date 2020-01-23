import React from 'react';
import './input.css';
import { Button } from 'react-bootstrap';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


class Input extends React.Component {

  state = {
    type:"",
    memo : "",
    money: ""
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const onlyNumber = (event) => {
      if((event.keyCode<48)||(event.keyCode>57))
         event.returnValue=false;
    }

    return(
      <div className="input-wrap">
        <span className="item-title">메모</span><br />
        <input className="memo" value={this.state.memo} onChange={event => this.setState({memo: event.target.value})} />
        <span className="item-title">금액</span><br />
        <div className="wrap-memo">
          <input className="memo-money" value={this.state.money} onChange={event => this.setState({money: event.target.value.replace(/\D/,'')})}/>

          <Button className="memo-button" variant="dark" onClick={async (event) => {
              await this.setState({type : this.props.type})
              return this.props.handleSubmit(this.state)
            }}><span>등록</span></Button>
        </div>
      </div>
    )
  }
}

export default Input;
