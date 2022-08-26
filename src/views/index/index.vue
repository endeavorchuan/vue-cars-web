<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapDemo"
      :center="center"
      :zoom="zoom"
      class="amap-demo"
    ></el-amap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 18, // 配置高德地图初始缩放级别，在PC上，默认范围[3,18]
      center: [116.396139, 39.917563], // 经纬度坐标，初始化地图的中心点
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/index.scss";
</style>
