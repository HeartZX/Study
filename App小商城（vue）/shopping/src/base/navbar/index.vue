<template>
  <div class="mine-navbar">
    <div class="mine-navbar-left" v-if="$slots.left">
      <slot name="left">1</slot>
    </div>
    <div class="mine-navbar-center" v-if="$slots.center">
      <slot name="center">2</slot>
    </div>
    <div class="mine-navbar-right" v-if="$slots.right">
      <slot name="right">3</slot>
    </div>
    <h1 class="mine-navbar-title" v-if="title">
        <span class="mine-navbar-text" v-text="title">jqjqjqjqjq</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "MeNavbar",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped>
.mine-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color:transparent;
}
.mine-navbar-left {
  margin-left: 10px;
}
.mine-navbar-center {
  flex: 1;
  margin: 0 10px;
}
.mine-navbar-right {
  margin-right: 10px;
}
.mine-navbar-title {
  position: absolute;
  left: 20%;
  right: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
  text-align: center;
}
.mine-navbar-text{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
}


</style>

