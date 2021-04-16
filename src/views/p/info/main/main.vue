<template>
  <div>
    <img
      src="https://aimg8.dlssyht.cn/u/1913406/ev_user_module_content_tmp/2019_07_24/tmp1563959645_1913406_s.jpg"
      alt=""
      class="main_bg"
    />
    <div class="main_box">
      <main-1></main-1>
      <main-2></main-2>
      <main-3></main-3>
    </div>
  </div>
</template>

<script>
import Main1 from "./main1.vue";
import Main2 from "./main2.vue";
import Main3 from "./main3.vue";
export default {
  components: {
    Main1,
    Main2,
    Main3,
  },
};
</script>

<style scoped>
.main_bg {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.main_box {
  position: relative;
}

.main_box /deep/ .line {
  font-size: 12px;
  cursor: pointer;
  color: #444;
  border-color: #36b0f3;
  border-width: 3px 0 0;
  border-style: solid;
  width: 36px;
  height: 0;
  border-top: rgb(60, 181, 213) 2px solid;
}
</style>