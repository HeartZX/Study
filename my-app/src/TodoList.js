import React, {Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
    //constructor 在组件创建的第一个时刻自动被执行
    constructor(props){
           super(props);
           this.handleInputChange=this.handleInputChange.bind(this);
           this.handleKeyUp=this.handleKeyUp.bind(this);
           this.handleOnClick=this.handleOnClick.bind(this);
           //在组件中创建了两个数据，数据一定要定义在state之中
           this.state={
               inputValue:'',
               List:['learn react','learn Component','learn react-dom'],
               finshList:[],     
           }
    }
    handleInputChange(e){
        console.log(this);
        this.setState({
           inputValue: e.target.value
       })
    }
    handleKeyUp(e){
        if(e.keyCode===13&&e.target.value!==''){
            const list=[...this.state.List,this.state.inputValue];
            this.setState({
               List:list,
               inputValue: ''
            })
        }
    }
    handleOnClick(index){
        const list=[...this.state.List];
        const finshList=[...this.state.finshList];
        finshList.push(list[index]);
        list.splice(index,1);
           this.setState({
            List:list,
            finshList
         });
    }
    getListItems(){
        //父组件通过属性的形式向子组件传值
        return this.state.List.map((value,index)=>{
            return <TodoItem 
            content={value} 
            key={index}
            index={index}
            deleteFunction={this.handleOnClick}
            >
            </TodoItem>
    })   
    }
    render() {
        return ( 
            <Fragment>
                {/* 注释 */}
                <label htmlFor='myinput'>请输入内容:</label>
                <input 
                id='myinput'
                value={this.state.inputValue}
                onChange={this.handleInputChange} 
                onKeyUp={this.handleKeyUp} 
                className='input'
                >   
                </input>
                <div>要做的事情：</div>
                <ul>
                    {this.getListItems()}
                </ul>
                <div>已完成的事情：</div>
                <ul>{this.state.finshList.map((value,index)=>{
                    return (
                    <li
                    key={index}
                    >
                    {value}
                    </li>
                    )
                })
                }
                </ul>         
            </Fragment>
        );
    }
}
export default TodoList;