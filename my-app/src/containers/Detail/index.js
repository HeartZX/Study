import React from 'react';
import {Card} from 'antd';
import axios from 'axios';
import  './style.css';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:''
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/detail.json?id='+id).then((res)=>{
            this.setState({
                title:res.data.data.title,
                content:res.data.data.content              
            })
        }) 
      }

    render(){
        return(
            <Card title={this.state.title}>
                <div dangerouslySetInnerHTML={{__html:this.state.content}} className='detail-content'></div>
            </Card>
    
        )     
    }
}

export default Detail;