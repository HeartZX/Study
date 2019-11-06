<template>
  <div class="slider-wrapper">
  <!--   <me-loading inline></me-loading> -->
    <me-slide :direction="direction" :loop="loop" :interval="interval" :pagination="pagination" v-if="slides.length">
      <swiper-slide v-for="(item,index) in slides" :key="index">
        <a :href="item.linkUrl" class="slide-link">
          <img :src="item.picUrl" class="slide-img" />
        </a>
      </swiper-slide>
    </me-slide>
  </div>
</template>
<script>
import MeSlide from "../../base/slide";
import { swiperSlide } from "vue-awesome-swiper";
import {slideOption, slideOptions} from './config';
import {getHomeSlide} from '../../api/home';
import MeLoading from '../../base/loading'

export default {
  name: "HomeSlide",
  components: {
    MeSlide,
    swiperSlide,
    MeLoading
  },
  data() {
    return {
      direction: slideOptions.direction,
      loop:slideOptions.loop,
      interval: slideOptions.interval,
      pagination: slideOptions.pagination,
      slides: [
          {
          linkUrl: "",
          picUrl: require("./1.jpg")
        },
        {
          linkUrl: "",
          picUrl: require("./2.jpg")
        },
        {
          linkUrl: "",
          picUrl: require("./3.jpg")
        },
         {
          linkUrl: "",
          picUrl: require("./4.jpg")
        } 
      ]
    };
  },
  /* created(){
   this.getslides();
  }, */
/*   methods:{
    getslides(){
      getHomeSlide().then(data=>{
        this.slides=data
      })
    }
  } */
};
</script>
<style scoped>
.slider-wrapper {
  height: 183px;
}
.slide-link {
  display: block;
  width: 100%;
  height: 100%;
}
.slide-img {
  width: 100%;
  height: 100%;
}
</style>