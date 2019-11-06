import axios from 'axios';
/* import jsonp from 'assets/js/jsonp' */
import {SUCC_CODE, TIMEOUT} from './config';

//获取图片数据
 export const getHomeSlide=()=>{
     return axios.get('http://www.imooc.com/api/home/slider',{
         timeout:TIMEOUT
     }).then(res=>{
         if(res.data.code===SUCC_CODE){
             return  res.data.slider;
         }
         throw new Error('数据没有获取到')
      }).catch(err=>{
          if(err){
              console.log(err);
          }
          return [
              {
                  linkUrl:'',
                  picUrl:require('../assets/img/404.png')
              }
          ];
      }).then(data=>{
          return new Promise(resolve=>{
              setTimeout(()=>{
                   resolve(data);
              },1000);
          });
      }); 
 }



 