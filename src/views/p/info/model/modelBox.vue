<template>
  <div class="model-box">
    <div class="wrap">
      <model-title><slot name="title"></slot></model-title>
      <slot>12312312312312</slot>
    </div>
  </div>
</template>

<script>
import modelTitle from "./modelTitle.vue";
export default {
  components: { modelTitle },
};
</script>

<style scoped>
.wrap {
  border: #1e90ff dotted 1px;
  margin-top: 20px;
  padding: 10px;
}
.model-title {
  margin-top: -25px;
}
</style>