<template>
  <div class="wrap">
    <div class="img_title"></div>
    <h3></h3>
    <p></p>
    <p></p>
    <p></p>
    <div class="bottom">
      <div class="left">
        <span>：夜场模特</span>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: {
        imgUrl: "",
        title: "",
        contact: "",
        phone: "",
        site: "",
      },
    },
  },
};
</script>