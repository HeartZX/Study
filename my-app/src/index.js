import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './style.css';
import logo from './compontents/Header/logo.png'
import AppHeader from './compontents/Header/'
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import AppList from './containers/AppList/';
import Detail from './containers/Detail/';
import Login from  './compontents/Login/';
import TodoList from './TodoList'
/* const { Header, Footer, Sider, Content } = Layout; */
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;
class App extends React.Component{

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  
  constructor(props){
    super(props);
    this.state={
      list:[],
      collapsed: false
    }
  }
  componentDidMount(){
    axios.get('http://www.dell-lee.com/react/api/header.json')
    .then((res)=>{
      this.setState({
         list:res.data.data
      })
      console.log(res.data.data)
    })
  }

  getMenuItems(){
    return this.state.list.map(item=>{
      return(  
       <Menu.Item key={item.id}>
          <Link to={`/${item.id}`}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
              </Link>
            </Menu.Item> 
       )   
    })
  }
        render(){
            return( 
              <BrowserRouter>
               <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {this.getMenuItems()}         
          </Menu>
        </Sider>
        <Layout>
          <Link to='/'>
          <Header className="header">
          <img src={logo} className="app-header-logo"></img>
          <Login></Login>
          </Header>
          </Link>       
          <Content style={{ margin: '0 16px',height:1000 }} className='content'>
            <Switch>
             <Route path="/detail/:id" 
                       component={Detail }
                    ></Route>
                    <Route  path= "/:id?" 
                    component={AppList}
                    ></Route>     
            </Switch>   
            <div style={{ padding: 24, background: '#fff'}}>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>copyright@2019 HeartZX</Footer>
        </Layout>
      </Layout>
     {/*            <Layout style={{minWidth:1300}}>
                  <Header className="header">
                    <AppHeader></AppHeader>
                  </Header>
                  <Content className="content">
                    <Switch>
                    <Route path= "/:id?" 
                    component={AppList}
                    ></Route>
                    <Route path="/detail" 
                       component={Detail }
                    ></Route>
                    </Switch>   
                  </Content>
                  <Footer className="footer">
                  copyright@2019 HeartZX
                    </Footer>
                </Layout> */}
                </BrowserRouter>
            )
        }
}
export default App;


//jsx语法
ReactDOM.render( < App / >,  document.getElementById('root'));
{/*  ReactDOM.render( < TodoList / > , document.getElementById('cs')); */}
{/*  ReactDOM.render( < TodoList / > , document.getElementById('root'));
ReactDOM.render( < Counter / > , document.getElementById('counter'));
 ReactDOM.render( < Antd / > , document.getElementById('antd')); 
 */}