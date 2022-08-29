<template>
  <div class="amap-wrap">
    <el-amap vid="amapContainer" :events="events" class="amap-demo"></el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  data() {
    return {
      map: null, // 用于存储地图实例
      zoom: 10, // 配置高德地图初始缩放级别，在PC上，默认范围[3,18]
      events: {},
    };
  },
  mounted() {
    // 加载完成之后，拿到地图的一些东西
    lazyAMapApiLoaderInstance.load().then(() => {
      // 创建高德地图的实例
      this.map = new AMap.Map("amapContainer", {
        // amapContainer 为高德地图所放置位置的id
        center: [121.59996, 31.197646], // 地图初始化时中心点
        zoom: this.zoom,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/index.scss";
</style>
