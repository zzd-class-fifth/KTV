<template>
  <div>
    main
    <item1 :data="{}"></item1>
  </div>
</template>

<script>
import item1 from "./item1.vue";

export default {
  components: { item1 },
  data() {
    return {};
  },
};
</script>