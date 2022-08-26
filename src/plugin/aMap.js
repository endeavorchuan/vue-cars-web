/**
 * @name: aMap
 * @author: chuanchuan
 * @date: 2022-08-26 16:25
 * @description：高德地图相关配置，引入到main.js
 * @update: 2022-08-26 16:25
 */

import Vue from "vue";

// 高德地图
// 高德离线地图
import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德key
  key: "a7f6d6677f2328d744f7e90ccbfdfcb5", // 官网申请
  // 插件集合 （插件按需引入）
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor",
    "AMap.MarkerClusterer",
  ],
  v: "1.4.15", // 我也不知道为什么要写这个，不写项目会报错，而且我随便写的，跟我下载的版本对应不了
  uiVersion: "1.0.11", // ui版本号，也是需要写
});
