<template>
  <div class="model">
    <div class="wrap">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/' }"> 首页</el-breadcrumb-item>
        <el-breadcrumb-item>模特展示</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <model-box
      ><p slot="title">模特展示</p>
      <model-left-nav></model-left-nav>
    </model-box>
    <model-detail></model-detail>
    <div class="ewm" ref="ewm"></div>
  </div>
</template>

<script>
import ModelBox from "./modelBox.vue";
import modelDetail from "./modelDetail.vue";
import ModelLeftNav from "./modelLeftNav.vue";
import ModelTitle from "./modelTitle.vue";
export default {
  components: { modelDetail, ModelTitle, ModelBox, ModelLeftNav },
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