<template>
  <div class="index-wrap">
    <span @click="user">汽车列表</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    user() {
      this.$router.push({
        name: "User",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/index.scss";
</style>
