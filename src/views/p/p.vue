<template>
  <el-container>
    <el-header class="defaultBgColor" height="100">
      <wHeader></wHeader>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <wFooter></wFooter>
    </el-footer>
  </el-container>
</template>

<script>
import wHeader from "@/components/p/header";
import wFooter from "@/components/p/footer";
export default {
  components: {
    wHeader,
    wFooter,
  },
};
</script>

<style scoped>
.el-footer {
  padding: 0;
}
</style>