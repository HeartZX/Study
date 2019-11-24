import React, { Component } from "react";
import { Modal, Button, Input } from "antd";
import "./style.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { login } = this.state;
    return (
      <div className="login">
        {login ? (
          <Button type="primary" onClick={this.showModal}>
            退出
          </Button>
        ) : (
          <Button type="primary" onClick={this.showModal}>
            {" "}
            登录
          </Button>
        )}
        <Modal
          title="登录"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            placeholder="请输入用户名"
            style={{
              marginBottom: 20,
              height: 30
            }}
          />
          <Input.Password
            placeholder="请输入密码"
            style={{
              height: 30
            }}
          />
        </Modal>
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://www.dell-lee.com/react/api/isLogin.json").then(res => {
      const login = res.data.data.login;
      this.setState({ login });
    });
  }
}

export default Login;
