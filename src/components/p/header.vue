<template>
  <div class="wrap">
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
      <span>{{ footer.phone }} </span>
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
};
</script>

<style scoped>
.wrap {
  height: 100px;
  display: flex;
  align-items: center;
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: none;
}
.li-tel {
  display: flex;
}
.li-tel img {
  width: 22px;
  height: 22px;
}
</style>