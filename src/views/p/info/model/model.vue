<template>
  <div class="model">
    <div class="wrap">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/' }"> 首页</el-breadcrumb-item>
        <el-breadcrumb-item>模特展示</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <model-detail></model-detail>
    <model-title></model-title>
    <model-title></model-title>
    <div class="ewm" ref="ewm"></div>
  </div>
</template>

<script>
import modelDetail from "./modelDetail.vue";
import ModelTitle from "./modelTitle.vue";
export default {
  components: { modelDetail, ModelTitle },
  data() {
    return {};
  },
  mounted() {
    new this.$qr(this.$refs.ewm, "https://www.baidu.com");
  },
};
</script>

<style scoped>
.wrap {
  width: 1200px;
  margin: auto;
}
.el-breadcrumb {
  background: #eff8ff;
  height: 35px;
  line-height: 35px;
}
.el-breadcrumb .el-breadcrumb__item >>> span {
  color: #2090ff;
}
.ewm {
  width: 200px;
}
.model-detail {
  margin: 50px;
}
</style>