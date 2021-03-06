import React from "react";
import "./dash.css";
import DashItem from "./dashItem";

class Dash extends React.Component {
  componentDidMount() {}

  render() {
    const dashItem = this.props.item.map(({ id, type, title, date, money }) => (
      <DashItem
        key={id}
        id={id}
        title={title}
        date={new Date(date)}
        money={money}
        type={type}
        onRemove={this.props.onRemove}
      />
    ));

    return (
      <div
        className="dash-wrap"
        style={{
          borderTop: this.props.item.length == 0 ? "none" : "1px solid gray"
        }}
      >
        {dashItem}
      </div>
    );
  }
}

export default Dash;
