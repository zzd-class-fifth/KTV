<template>
  <div class="mode-left-nav">
    <div class="wrap">
      <el-menu mode="vertical" :router="true">
        <el-menu-item
          ><i class="el-icon-caret-right"></i> 高端模特</el-menu-item
        >
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-icon-caret-right {
  color: rgb(51, 51, 255);
}
.el-menu-item:hover {
  background: transparent;
}
</style>