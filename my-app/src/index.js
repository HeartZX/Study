import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./style.css";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Item } from "rc-menu";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  constructor(props) {
    super(props);
    this.state = {
      menulist: [
        {
          id: "spgl",
          icon: "usergroup-delete",
          title: "用户管理",
          child: [
            {
              id: "splb",
              title: "用户列表"
            },
            {
              id: "spfz",
              title: "用户管理"
            }
          ]
        },
        {
          id: "ddgl",
          icon: "usergroup-delete",
          title: "图书管理",
          child: [
            {
              id: "tsgl",
              title: "图书列表"
            },
            {
              id: "tsfz",
              title: "图书分组管理"
            }
          ]
        }
      ],
      collapsed: false
    };
  }
  componentDidMount() {
    /*    axios.get("http://www.dell-lee.com/react/api/header.json").then(res => {
      this.setState({
        list: res.data.data
      });
      console.log(res.data.data);
    }); */
  }
  getSubMenu() {
    return this.state.menulist.map(item => {
      return (
        <SubMenu
          key={item.id}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          }
        >
          {/*  {item.child.map(menuItem => {
            return <Menu.Item key={menuItem.id}>{menuItem.title}</Menu.Item>;
          })} */}
          {item.child.map(menuItem => (
            <Menu.Item key={menuItem.id}>{menuItem.title}</Menu.Item>
          ))}
        </SubMenu>
      );
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            {this.getSubMenu()}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;

//jsx语法
ReactDOM.render(<App />, document.getElementById("root"));
