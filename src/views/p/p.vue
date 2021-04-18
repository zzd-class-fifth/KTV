<template>
  <el-container>
    <el-main>
      <wHeader></wHeader>
      <router-view></router-view>
      <wFooter></wFooter>
    </el-main>
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