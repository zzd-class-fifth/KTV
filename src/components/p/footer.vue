<template>
  <div class="footer" ref="footer">
    <div class="wrap">
      <transition name="el-zoom-in-center">
        <div class="wrap_top" v-show="isShow">
          <div class="box_left">
            <h2 class="title">锦缘国际夜总会</h2>
            <p class="msg">
              成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，设备齐全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢
            </p>
            <div class="des">
              <p>咨询电话：13688143752</p>
              <p>公司地址：高端夜场夜总会</p>
            </div>
          </div>
          <div class="box_right">
            <div class="ewm">
              <img
                src="//aimg8.dlssyht.cn/u/1913406/module/simplepicbackground/1913406/10387/20772430_1609926138.png?x-oss-process=image/resize,m_fixed,w_134,h_134,limit_0"
                alt=""
              />
            </div>
            <p class="ewm-msg">关注加好友更优惠</p>
          </div>
        </div>
      </transition>
      <div class="wrap_footer">
        <p>
          Copyright @ 2021. All rights reserved.高端夜场夜总会 版权所有.
          京ICP备11058096号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.addScrollEvent();
  },
  methods: {
    onScroll() {
      this.isShow = true;
    },
    addScrollEvent() {
      if (!this.isShow) {
        this.addScroll({
          currentTarget: this.$refs.footer,
          succeed: this.onScroll,
        });
      }
    },
  },
  destroyed() {
    this.removeScroll({
      currentTarget: this.$refs.footer,
    });
  },
  watch: {
    $route() {
      this.isShow = false;
      this.addScrollEvent();
    },
  },
};
</script>

<style scoped>
.wrap {
  background-color: rgb(38, 44, 56);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.wrap_top {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  border-bottom: 1px solid #3f3f3f;
}
.box_left {
  width: 500px;
}
.title {
  font-size: 36px;
  line-height: 1.3;
  color: rgb(255, 255, 255);
}
.box_right {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ewm {
  width: 162px;
}
.ewm-msg {
  color: #989898;
  font-size: 14px;
  line-height: 1.8;
}
.wrap_footer {
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: rgb(152, 152, 152);
  height: 52px;
  font-size: 12px;
}
.msg {
  margin: 30px auto;
  font-size: 14px;
  color: #989898;
}
.des {
  margin: 30px auto;
  font-size: 14px;
  color: #00b7d9;
}
</style>