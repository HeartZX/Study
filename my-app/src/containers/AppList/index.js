import React from 'react';
import { List } from 'antd';
import axios from 'axios';

class AppList extends React.Component{
    constructor(props){
        super(props);
        console.log( this.props);   
        this.state={
            data:[]
        }
    }
    componentDidMount(){
      console.log( this.props);
      /*   const id=this.props.match.params.id */
        axios.get('http://www.dell-lee.com/react/api/list.json').then((res)=>{
            this.setState({
                data:res.data.data
            })
        })
    }
    render(){   
      console.log(this.props);
        return(
            <List
            style={{
                background:'#fff'
            }
            }
            bordered
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item>
                {item.title}
              </List.Item>
            )}
          />
        )
    }
}

export default AppList;