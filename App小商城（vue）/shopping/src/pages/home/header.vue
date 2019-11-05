<template>
  <me-navbar class="header" title="">
    <i class="el-icon-full-screen" slot="left"></i>
   <!--  <div slot="center">搜索框</div> -->
    <i class="el-icon-chat-dot-round" slot="right"></i>
  </me-navbar>
</template>
<script>
import MeNavbar from "@/base/navbar";
import Vue from 'vue';


export default {
  name: "HomeHeader",
  components: {
    MeNavbar
  }
};
</script>
<style scoped>

.header {
     font-size: 30px;
     color:black;
    
}
</style>