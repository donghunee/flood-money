import React from "react";
import "./dash.css";
import { Button } from "react-bootstrap";

class DashItem extends React.Component {
  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    let { id, title, money, date, onRemove, type } = this.props;
    return (
      <div className="dash-item">
        <div className="day">
          {("0" + date.getMonth() + 1).slice(-2)}.
          {("0" + date.getDate()).slice(-2)}
          <br />
          <span style={{ color: "gray", fontWeight: 100 }}>
            {("0" + date.getHours()).slice(-2)}:
            {("0" + date.getMinutes()).slice(-2)}
          </span>
        </div>
        <div className="dash-content">
          <span className="dash-title">{title}</span>
          <br />
          <span
            className="dash-money"
            style={{ fontSize: 19, color: type == "plus" ? "blue" : "black" }}
          >
            {type == "plus" ? "+ " : "- "}
            {this.numberWithCommas(money)}원
          </span>
        </div>
        <div className="close-wrap">
          <i
            style={{ fontSize: 25 }}
            className="icon close ion-md-close"
            onClick={e => {
              // e.stopPropagation() // onToggle 이 실행되지 않도록 함
              onRemove(id);
            }}
          ></i>
        </div>
      </div>
    );
  }
}

export default DashItem;
