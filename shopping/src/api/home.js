import axios from 'axios';
import jsonp from '../assets/js/jsonp'
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

//获取热门推荐数据
/* export const getHomeRecommend=()=>{
    return axios.get('https://ju.taobao.com/json/tg/ajaxGetItemsV2.json',{
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
             },0);
         });
     }); 
}  */



 // 获取热门推荐数据--jsonp
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
    const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
    const params = {
      page,
      psize,
      type: 0,
      frontCatId: ''
    };
  
    return jsonp(url, params, jsonpOptions).then(res => {
      if (res.code === '200') {
        return res;
      }
  
      throw new Error('没有成功获取到数据！');
    }).catch(err => {
      if (err) {
        console.log(err);
      }
    }).then(res => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(res);
        }, 1000);
      });
    });
  };