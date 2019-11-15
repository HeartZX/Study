import React,{Component,Fragment} from 'react';
import Child from './Child';
import Number from './Number';

import Antd from './antd';



class Counter extends Component{
    constructor(props){
        super(props);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.state={
            counter:1
        }
    }
    //挂载前自动执行
    componentWillMount(){
        console.log('componentWillMount')
    }
    //挂载后自动执行
    componentDidMount(){
        console.log('componentDidMount')
    }
    //组件更新前 自动执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
       /*  return false; */
       return true;
    }
     //组件更新前 shouldComponentUpdate之后 自动执行
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
     //组件更新前 render之后 自动执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    //组件从页面中移除前执行
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleBtnClick(){
        console.log(this.buttonElem.offsetTop);
        console.log(this.childElem);

       const newCounter=this.state.counter + 1;
       console.log(this.divElem.innerHTML);
          //setState 是异步的
        this.setState(()=>{
            return{
                counter:newCounter
            }
        },()=>{
            console.log(this.divElem.innerHTML);
        } )      
    }
      //渲染时自动执行
      //组件更新前 scomponentWillUpdate之后 自动执行
    render(){
        console.log('render');
        //当组件初次创建的时候，render函数会被执行一次
        //当state数据发生变更的时候，render函数会被重新执行
        //当props数据发生变更的时候，render函数会被重新执行

        //ref写在组件标签上，获取的是组件的js实例
        //ref写在html标签上，获取的是dom节点
        return(
            <Fragment>
                <Number
                  count={this.state.counter}
                >
                </Number>
                <button onClick={this.handleBtnClick}
                 ref={(button=>{
                     this.buttonElem=button                   
                 })}
                >
                    增加
                </button>
               <Child
               ref={(child)=>{this.childElem=child}}
               number={this.state.counter}
               ></Child>
               <div ref={(div)=>{this.divElem=div}}>
               {this.state.counter}
               </div>
            </Fragment>
        )
    }
}

export default Counter;






