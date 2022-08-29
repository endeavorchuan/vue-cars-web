<template>
  <div>
    <!-- 汽车数据渲染 -->
    <Cars />
    <!-- 地图 -->
    <Map />
    <!-- 会员（子路由） -->
    <div id="children-view" :class="[show ? 'open' : '']">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "../amap/index";
import Cars from "../cars/index";
export default {
  components: {
    Map,
    Cars,
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    // 监听路由变化
    $route: {
      handler(newValue) {
        const routerName = newValue.name;
        this.show = routerName !== "Index"; // 路由为User时才显示
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/index.scss";
</style>
