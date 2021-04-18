<template>
  <div class="mode-item-1">
    <div class="wrap">
      <div class="img-box"><img class="img" :src="imgUrl" /></div>
      <div class="price-box">
        <span class="price">{{ price }}.00</span>
        <span class="unit">元</span>
      </div>
      <div class="msg">{{ msg }}:::{{ id }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: 0,
    imgUrl: { default: require("@/assets/img/belle_5.jpg") },
    price: { default: 1500 },
    msg: { default: "长沙夜总会模特" },
  },
};
</script>

<style scoped>
.wrap {
  font-size: 14px;
  line-height: 2;
}
.img-box {
  width: 200px;
  height: 200px;
  border: 1px dotted black;
}
.img {
  height: 100%;
  object-fit: scale-down;
}
.price {
  color: red;
  font-weight: 600;
}
.unit {
  color: #999;
}
.msg {
  font-weight: 800;
}
</style>
