<template>
  <div class="recommend">
    <h3 class="recommend-title">热卖推荐</h3>
 <!--    <div class="loading-container" v-if="!recommends.length">
      <me-loading inline/>
    </div> -->
   <!--  <ul class="recommend-list" v-else>
      <li
        class="recommend-item"
        v-for="(item, index) in recommends"
        :key="index"
      >
        <router-link
          class="recommend-link"
          :to="{name: 'home-product', params: {id: item.baseinfo.itemId}}"
        >
          <p class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrlNew"></p>
          <p class="recommend-name">{{item.name.shortName}}</p>
          <p class="recommend-origPrice"><del>¥{{item.price.origPrice}}</del></p>
          <p class="recommend-info">
            <span class="recommend-price">¥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
            <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
          </p>
        </router-link>
      </li>
    </ul> -->
  </div>

</template>

<script>
  import {getHomeRecommend} from '../../api/home';
 /*  import MeLoading from 'base/loading'; */

  export default {
    name: 'HomeRecommend',
    


  };
</script>

<style lang="scss" scoped>

</style>