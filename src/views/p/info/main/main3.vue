<template>
  <div class="main3_wrap">
    <h1>高端KTV夜总会模特</h1>
    <span class="line"></span>
    <div class="content">
      <main-3-item-1 v-for="(item, index) in list" :key="index"></main-3-item-1>
    </div>
  </div>
</template>

<script>
import main3Item1 from "./main3Item1.vue";
export default {
  components: {
    main3Item1,
  },
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}],
    };
  },
};
</script>


<style scoped>
.main3_wrap {
  background: #e1e5e8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
  margin: auto;
  background: white;
  padding: 50px 0;
  margin-top: 50px;
}
</style>