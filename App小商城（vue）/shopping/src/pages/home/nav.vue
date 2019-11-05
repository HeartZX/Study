<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item,index) in navs" :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic" />
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
  import {navItems} from './config';
export default {
  name: "HomeNav",
  data() {
    return {
        
    }
  },
  created(){
     this.navs=navItems;
  }
};
</script>
<style scoped>
.nav {
  width: 100%;
  padding-top: 15px;
  background-color: #fff;
}
.nav-list {
  display: flex;
  flex-wrap: wrap;
}
.nav-item {
  width: 25%;
  margin-bottom: 15px;
}

.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   color: #000;
   text-decoration: none;
}

.nav-pic{
    width: 60%;
    margin-bottom: 8px;
}

</style>