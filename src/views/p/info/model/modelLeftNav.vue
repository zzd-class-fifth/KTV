<template>
  <div class="mode-left-nav">
    <div class="wrap">
      <el-menu mode="vertical" :router="true">
        <el-menu-item :style="{ padding: 0 }">
          <i class="el-icon-caret-right"></i><b>高端模特</b>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  width: 350px;
}
.el-icon-caret-right {
  color: rgb(51, 51, 255);
}
.el-menu-item {
  margin: 0;
  list-style: none;
  position: relative;
  width: 100%;
  border-bottom: 1px dotted gray;
  height: 32px;
  line-height: 32px;
  margin-bottom: 5px;
  margin-top: 20px;
}
.el-menu-item:hover {
  background: transparent;
  color: blue;
}
</style>