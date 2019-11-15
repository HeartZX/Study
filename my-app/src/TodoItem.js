import React from 'react';

class TodoItem extends React.Component {
     constructor(props){
         super(props);
         this.handleItemClick=this.handleItemClick.bind(this);
     }
     handleItemClick(){
        //改变父组件中的list数据
        //子组件想要和父组件通信，它要调用父组件传递过来的方法
        const {deleteFunction,index}=this.props
        deleteFunction(index);
     }

    render(){
        console.log(this.props);
        //子组件通过this.props的属性，从父组件接受传递过来的值
        const {content}=this.props;
        return(
            <li
            onClick={this.handleItemClick}
            > {content}</li>
                
        )
    }
}
export default TodoItem;