<template>
  <div class="model-advanced">
    <div class="wrap">
      <model-box>
        <p slot="title">高级模特</p>
        <div class="box">
          <model-show-item-1
            v-for="(item, index) in dataList"
            :key="index"
            :id="item.id"
          ></model-show-item-1>
        </div>
        <model-show-pagination
          layout="totalPage, first, prev, pager, next, last"
          :total="defaultDataList.length"
          :pageSize="pageSize"
          :current-page.sync="currentPage"
        ></model-show-pagination>
      </model-box>
    </div>
  </div>
</template>

<script>
import modelBox from "../modelBox.vue";
import ModelShowItem1 from "../modelShow/modelShowItem1.vue";
import ModelShowPagination from "../modelShow/modelShowPagination.vue";

export default {
  components: { modelBox, ModelShowItem1, ModelShowPagination },
  data() {
    return {
      //显示出来的数据
      dataList: [],
      // 总共的数据
      defaultDataList: [],
      currentPage: 1, //当前显示的页面
      pageSize: 6, //每页显示的数量
    };
  },
  created() {
    for (let index = 0; index < 20; index++) {
      this.defaultDataList.push({ id: index });
    }

    this.dataList = this.getDataList();
  },
  methods: {
    getDataList() {
      return this.defaultDataList.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  watch: {
    currentPage() {
      this.dataList = this.getDataList();
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>