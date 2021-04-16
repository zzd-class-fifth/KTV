<template>
  <div class="main-4">
    <div class="wrap">
      <div class="title">
        <h1 class="title-msg">新闻咨询</h1>
        <p class="title-des">T E A C H E R</p>
        <span class="line"></span>
      </div>
      <div class="box">
        <div class="box-left">
          <img
            src="https://aimg8.dlssyht.cn/u/1913406/module/simplepicbackground/1913406/10387/20772417_1609925823.jpeg"
            alt=""
          />
        </div>
        <div class="box-right">
          <main-4-item-1 v-for="(item, index) in list" :key="index"></main-4-item-1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Main4Item1 from "./main4Item1";
export default {
  components: {
    Main4Item1,
  },
  data() {
    return {
      list: [{}, {}, {}],
    };
  },
};
</script>

<style scoped>
.wrap {
  background: white;
  padding: 50px;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-msg {
  margin-top: 100px;
  font-size: 32px;
  color: #333333;
}
.title-des {
  margin: 10px;
  color: #989898;
  font-size: 22px;
}
.box {
  display: flex;
  justify-content: space-around;
  width: 1200px;
  margin: 50px auto;
}
.box-left {
  width: 433px;
}
</style>