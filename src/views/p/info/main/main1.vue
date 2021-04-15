<template>
  <div class="wrap defaultBgColor">
    <span class="title">ENVIRONMENTAL DISPLAY</span>
    <p class="msg1">环境/AMBIENT</p>
    <span class="line"></span>
    <div class="box_1">
      <item1 v-for="(item, index) in items" :key="index"></item1>
    </div>
    <el-button type="primary">查看更多</el-button>
  </div>
</template>

<script>
import item1 from "./item1";
export default {
  components: { item1 },
  data() {
    return {
      items: [{}, {}, {}],
    };
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  word-break: break-word;
  text-align: center;
  line-height: 1.9;
  color: #212121;
  font-size: 36px;
  font-weight: 700;
}
.msg1 {
  word-break: break-word;
  text-align: center;
  color: #989898;
  font-size: 18px;
  line-height: 2;
}
.box_1 {
  display: flex;
  justify-content: space-around;
  width: 1200px;
  margin-top: 50px;
}
</style>