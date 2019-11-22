import React from 'react';
import { List } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AppList extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps.match.params.id);
    const id=nextProps.match.params.id 
      axios.get('http://www.dell-lee.com/react/api/list.json?id='+id).then((res)=>{
          this.setState({
              data:res.data.data
          })
      })
  }
    constructor(props){
        super(props);
        console.log( this.props);   
        this.state={
            data:[]
        }
    }
    componentDidMount(){
      console.log( this.props);
      const id=this.props.match.params.id 
      let url='http://www.dell-lee.com/react/api/list.json';
      if(id){
        url=url+'?id='+id;
      }
        axios.get(url).then((res)=>{
            this.setState({
                data:res.data.data
            })
        })    
    }
    render(){   
      console.log(this.props.match.params.id);
        return(
            <List
            style={{
                background:'#fff',
            }
            }
            bordered
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item>
                <Link to={`/detail/${item.id}`}>
                {item.title}
                </Link>
              </List.Item>
            )}
          />
        )
    }
}

export default AppList;