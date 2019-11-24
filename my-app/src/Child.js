import React, { Component } from "react";
import axios from "axios";
import { Button } from "antd";

class Child extends Component {
  render() {
    return 1;
  }

  componentDidMount() {
    const promise = axios.get("http://www.dell-lee.com/react/api/demo.json");
    promise.then(res => {
      console.log(res.data);
    });
  }
}

export default Child;
