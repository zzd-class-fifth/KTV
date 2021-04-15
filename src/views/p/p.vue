<template>
  <el-container>
    <el-header height="100px">
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