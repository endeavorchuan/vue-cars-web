<template>
  <div>
    <!-- 汽车数据渲染 -->
    <Cars />
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <Navbar />
    <!-- 会员（子路由） -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "@/views/amap/index";
import Cars from "@/views/cars/index";
import Navbar from "@/components/navbar/index";
export default {
  components: {
    Map,
    Cars,
    Navbar,
  },
  data() {
    return {};
  },
  // 改用computed监听路由信息，而不用watch
  computed: {
    show() {
      const router = this.$route;
      return router.name !== "Index";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/index.scss";
</style>
