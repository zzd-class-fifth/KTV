<template>
  <div class="me">
    <div class="wrap">
      <img
        src="https://aimg8.dlszyht.net.cn/ev_user_module_content_tmp/2018_09_30/tmp1538300266_1761174_s.jpg"
        alt=""
      />
      <div class="box">
        <div class="box-left">
          <me-nav></me-nav>
        </div>
        <div class="box-righ">
          <transition name="el-zoom-in-top">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import meNav from "./meNav.vue";
export default {
  components: { meNav },
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-zoom-in-top-leave-active {
  transition: all 0s;
}
.content-title /deep/ {
  color: #333333;
  font-size: 30px;
  font-weight: 700;
}
.box {
  display: flex;
  justify-content: space-around;
  margin: 80px auto;
  width: 1200px;
}
.box-righ {
  width: 950px;
  padding: 20px;
}
</style>