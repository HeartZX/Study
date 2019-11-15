import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './style.css';
import { Layout } from 'antd';
import AppHeader from './compontents/Header/'
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import AppList from './containers/AppList/';
import Detail from './containers/Detail/';
import TodoList from './TodoList'
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component{
        render(){
            return( 
              <BrowserRouter>
                <Layout style={{minWidth:1300}}>
                  <Header className="header">
                    <AppHeader></AppHeader>
                  </Header>
                  <Content className="content">
                    <Switch>
                    <Route path="/:id">< AppList></ AppList></Route>
                    <Route path='/detail' children={<Detail></Detail>}></Route>
                    </Switch>   
                  </Content>
                  <Footer className="footer">
                  copyright@2019 HeartZX
                    </Footer>
                </Layout>
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