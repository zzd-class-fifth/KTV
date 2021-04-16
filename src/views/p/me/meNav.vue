<template>
  <div class="me-nav">
    <el-menu mode="vertical" :router="true" :default-active="default_active">
      <el-menu-item
        :index="item.path"
        v-for="(item, index) in menuList"
        :key="index"
        >{{ item.title }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "关于我们",
          path: "/p/me/about",
        },
        {
          title: "联系我们",
          path: "/p/me/contact",
        },
        {
          title: "招聘要求",
          path: "/p/me/recruit",
        },
      ],
      default_active: "",
    };
  },
  created() {
    this.default_active = this.$route.path;
  },
  watch: {
    $route(to) {
      this.default_active = to.path;
    },
  },
};
</script>

<style scoped>
.el-menu {
  border: none;
}
.el-menu-item {
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  color: rgb(102, 102, 102);
  font-size: 16px;
  font-weight: 700;
  background: rgb(235, 235, 235);
  margin-bottom: 10px;
  width: 230px;
}
.is-active {
  background: rgb(60, 181, 213);
  color: white;
}
</style>