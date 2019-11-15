import React from 'react';
/* import {Component} from 'react';
import React from 'react';
const {Component}=React;
const Component=React.Component; */

//jsx语法里面，有两种类型的标签
//1.普通的html标签
//2.组件标签 首字母要大写

class App extends React.Component {
  render() {
    return ( 
    <div className = "App" >123 </div>
    );
  }
}

export default App;