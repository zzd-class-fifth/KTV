<template>
  <div class="model">
    <div class="wrap">
      <model-breadcrumb></model-breadcrumb>
      <div class="box">
        <model-box class="left-nav-box">
          <p slot="title">模特展示</p>
          <model-left-nav></model-left-nav>
        </model-box>
        
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ModelBox from "./modelBox.vue";
import ModelBreadcrumb from "./modelBreadcrumb.vue";
import ModelLeftNav from "./modelLeftNav.vue";
import ModelTitle from "./modelTitle.vue";
export default {
  components: {
    ModelTitle,
    ModelBox,
    ModelLeftNav,
    ModelBreadcrumb,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.wrap {
  width: 1200px;
  margin: auto;
}
.box {
  display: flex;
}
.model-detail {
  margin: 50px;
}
</style>