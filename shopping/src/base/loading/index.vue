<template>
  <div class="mine-loading">
    <span class="mine-loading-indicator" v-if="indicator==='on'">
      <slot>
        <img src="./loading.gif" alt="loading" />
      </slot>
    </span>
    <span class="mine-loading-text" v-if="text">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: "MeLoading",
  props: {
    indicator: {
      type: String,
      default: "on",
      validator(value) {
        return ["on", "off"].indexOf(value) > -1;
      }
    },
    text: {
      type: String,
      default: "加载中..."
    },
    inline:{
        type:Boolean,
        default:false
    }
  }
};
</script>
<style scoped>
.mine-loading {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mine-loading-inline{
    flex-direction: row


}
.mine-loading-indicator ~ .mine-loading-text{
    margin-top: 6px;
}



</style>