<template>
  <div>
    model
    <div class="ewm" ref="ewm"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    new this.$qr(this.$refs.ewm, "https://www.baidu.com");
  },
};
</script>

<style scoped>
.ewm {
  width: 200px;
}
</style>