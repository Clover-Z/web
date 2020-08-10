<!--由菜单进入的主页面，定义了子路由的跳转处理-->
<template>
  <div>
    <slot v-show="mainShow"></slot>

    <router-view v-if="!mainShow"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainShow: true
    }
  }
}
</script>

<style scoped>

</style>