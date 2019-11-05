<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="el-icon-house"></i>
      <div class="text">首页</div>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="el-icon-menu"></i>
      <div class="text">分类页</div>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="el-icon-shopping-cart-2"></i>
      <div class="text">购物车</div>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="el-icon-user"></i>
      <div class="text">个人中心</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CTabbar'
  };
</script>

<style scoped>
/* 
 @import "~assets/scss/mixins"; */
 .g-tabbar{
  display: flex;
  justify-content: space-around;
  border-top: 1px gray solid;
  width: 100%; 
  font-size: 30px;
}
.text{
  font-size: 15px;
}
.g-tabbar-item{
  text-decoration:none;
  height: 100%;
  color: black;
  text-align: center;
} 

</style> 
