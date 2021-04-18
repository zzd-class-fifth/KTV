<template>
  <div class="model-breadcrumb">
    <el-breadcrumb separator=">>">
      <el-breadcrumb-item :to="{ path: '/' }"> 首页</el-breadcrumb-item>
      <el-breadcrumb-item>模特展示</el-breadcrumb-item>
      <el-breadcrumb-item>高级模特</el-breadcrumb-item>
      <el-breadcrumb-item>{{}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-breadcrumb {
  background: #eff8ff;
  height: 35px;
  line-height: 35px;
}
.el-breadcrumb .el-breadcrumb__item >>> span {
  color: #2090ff;
}
</style>