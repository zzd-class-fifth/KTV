<template>
  <div>
    <!-- 通用的头部 -->
    <div class="wrap">
      <!-- 背景图 -->
      <div>
        <img
          src="//49.235.93.38:82/uploads/20210407/41e0a5560cf6b326f1ccfebb5efc9079.jpg"
          alt=""
        />
      </div>

      <div class="banner_wrap">
        <div class="banner_box">
          <div class="title"></div>

          <div class="banner_footer_box">
            <div class="ewm">
              <img
                src="//49.235.93.38:82/uploads/20210407/ccc3edd90f9b0b9d3826c0c73819b819.bmp"
                alt=""
              />
            </div>
            <div class="phone"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.wrap {
  position: relative;
}
.banner_wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.banner_box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.title {
  width: 800px;
  height: 100px;
  background-color: rgba(102, 0, 0, 0.7);
}
.banner_footer_box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
}
.ewm {
  width: 134px;
}
.phone {
  width: 134px;
  height: 45px;
  background: #d9534f;
}
.dot {
  width: 15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 100%;
}
</style>