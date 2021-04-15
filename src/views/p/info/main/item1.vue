<template>
  <div class="wrap_item1">
    <div class="img_title">
      <img :src="data.imgUrl" class="default-img" />
    </div>
    <h3 class="title">{{ data.title }}</h3>
    <div class="info">
      <p>联系人：{{ data.contact }}</p>
      <p>手 机：{{ data.phone }}（微信同号）</p>
      <p>地 址：{{ data.site }}</p>
      <div class="bottom">
        <div class="left">
          <div class="defaultImg">
            <img
              src="http://aimg8.dlszyht.net.cn/module/simplepicbackground/1761174/3969/7936683_1538965745.png?x-oss-process=image/resize,m_fixed,w_20,h_16,limit_0"
            />
          </div>
          <span>：{{ data.type }}</span>
        </div>
        <div class="right">
          <div class="defaultImg">
            <img
              src="http://aimg8.dlszyht.net.cn/module/simplepicbackground/1761174/3969/7936704_1538965778.png?x-oss-process=image/resize,m_fixed,w_19,h_19,limit_0"
            />
          </div>
          <span>：{{ data.peopleNum }}人</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default() {
        return {
          id: "",
          imgUrl:
            "https://aimg8.dlssyht.cn/u/1913406/module/simplepicbackground/1913406/7228/14455970_1563958962.jpg?x-oss-process=image/resize,m_fixed,w_380,h_220,limit_0",
          title: "成都夜总会环境",
          contact: "周经理",
          phone: "13688143752",
          site: "成都",
          type: "夜场模特",
          peopleNum: 12000,
        };
      },
      required: false,
    },
  },
};
</script>

<style scoped>
.wrap_item1 {
  display: inline-block;
  background: white;
}
.title {
  margin: 20px auto;
  color: #666666;
}
.bottom {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
}
.defaultImg {
  cursor: pointer;
  width: 20px;
  display: inline-block;
}
.info {
  color: #989898;
  margin: 20px auto;
}
.left,
.right {
  display: flex;
  align-items: center;
}
</style>