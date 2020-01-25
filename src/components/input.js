import React from "react";
import "./input.css";
import { Button } from "react-bootstrap";
import NumberFormat from "react-number-format";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Input extends React.Component {
  state = {
    type: "",
    memo: "",
    money: ""
  };

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <div className="input-wrap">
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 20,
            fontWeight: 2000
          }}
        >
          {this.props.type == "plus" ? "입금" : "출금"}
        </div>
        <span className="item-title">메모</span>
        <br />
        <input
          className="memo"
          value={this.state.memo}
          style={{ borderColor: this.props.type == "plus" ? "blue" : "black" }}
          onChange={event => this.setState({ memo: event.target.value })}
        />
        <span className="item-title">금액</span>
        <br />
        <div className="wrap-memo">
          <NumberFormat
            className="memo-money"
            type={"tel"}
            style={{
              borderColor: this.props.type == "plus" ? "blue" : "black"
            }}
            onChange={event =>
              this.setState({ money: event.target.value.replace(/(,)/g, "") })
            }
            thousandSeparator={true}
            suffix={"원"}
          />
          <Button
            className="memo-button"
            variant={this.props.type == "plus" ? "primary" : "dark"}
            onClick={async event => {
              await this.setState({ type: this.props.type });
              console.log(this.state);
              return this.props.handleSubmit(this.state);
            }}
          >
            <span>등록</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default Input;
