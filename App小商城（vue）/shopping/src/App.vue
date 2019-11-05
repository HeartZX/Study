<template>
  <div id="app" class="g-container">

    <router-view/>
        <div class="g-footer-container">
      <c-tabbar/>
    </div>
  </div>
</template>

<script>
 import CTabbar from '../src/components/tabbar';
export default {
  name: 'App',
  components: {
      CTabbar
    }

}
</script>

<style>
*{
 margin: 0 auto;
 padding: 0 ;
 list-style: none;
}
.g-container{
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  height: 100%;
}
.g-footer-container{
   position: fixed;
   bottom: 0;
   color:white;
   width: 100%;
}
</style>
