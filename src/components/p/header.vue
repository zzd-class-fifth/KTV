<template>
  <div class="header_wrap">
    <div class="logo_box">
      <img class="logo" src="@/assets/img/20771839_1609920594.png" alt="" />
    </div>

    <el-menu
      mode="horizontal"
      class="nav"
      active-text-color="#409EFF"
      text-color="#333"
      :router="true"
      :default-active="route"
      background-color="#F3F3F3"
    >
      <el-menu-item index="/p/info/main">首页</el-menu-item>
      <el-menu-item index="/p/me/about">关于我们</el-menu-item>
      <el-menu-item index="/p/info/model">模特展示</el-menu-item>
      <el-menu-item index="/p/info/environment">环境展示</el-menu-item>
      <el-menu-item index="/p/info/news">夜场新闻</el-menu-item>
      <el-menu-item index="/p/me/contact">联系我们</el-menu-item>
      <el-menu-item index="/p/me/recruit">招聘要求</el-menu-item>
      <div class="line"></div>
    </el-menu>

    <div class="li-tel">
      <img src="@/assets/img/7877635_1538278040.png" alt="" />
      <span class="phone"> {{ footer.phone }} </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: "",
      footer: {
        phone: "13688143752",
      },
    };
  },
  created() {
    this.route = this.$route.path;
  },
  watch: {
    $route(to) {
      this.route = to.path;
    },
  },
};
</script>

<style scoped>
.header_wrap {
  width: 1200px;
  display: flex;
  align-items: center;
  margin: auto;
  z-index: 10;
}
.logo_box {
  display: flex;
  align-items: center;
}
.logo {
  width: 249px;
  height: 31px;
}
.nav {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: none;
}
.nav li {
  line-height: 100px;
  height: 100px;
}
.li-tel {
  display: flex;
  margin-left: 50px;
  color: #00b7d9;
}
.phone {
  margin-left: 10px;
}
.li-tel img {
  width: 22px;
  height: 22px;
}
</style>