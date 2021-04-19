<template>
  <div class="model-breadcrumb">
    <el-breadcrumb separator=">>">
      <el-breadcrumb-item :to="{ path: '/' }"> 首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="toModelShow">模特展示</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="
          $route.path.indexOf('modelDetail') != -1
            ? { name: 'modelAdvanced' }
            : ''
        "
        v-if="$route.path.indexOf('modelAdvanced') != -1"
        >高级模特</el-breadcrumb-item
      >
      <!-- <el-breadcrumb-item>{{}}</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    toModelShow() {
      let path =
        this.$route.name == "modelShow"
          ? ""
          : {
              name: "model",
            };
      return path;
    },
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