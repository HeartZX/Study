import React, { Component } from "react";

class Number extends Component {
  componentWillReceiveProps() {
    console.log(
      "componentWillReceiveProps-------------------------------------"
    );
  }
  render() {
    return <div> {this.props.count}</div>;
  }
}
export default Number;
