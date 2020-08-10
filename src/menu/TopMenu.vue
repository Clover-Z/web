<template>
  <div id="m">
    <div class="content">
      <!--Logo-->
      <span class="logo"><img src="../assets/unionpay.png"></span>

      <!--菜单-->
      <el-menu id="menuNav"
               mode="horizontal"
               menu-trigger="click"
               :default-active="active"
               @select="(index)=>{this.$emit('update:active', index)}"
      >
        <el-menu-item
            v-for="menu in menus"
            :index="menu.id"
            :key="menu.id"
        >{{menu.name}}</el-menu-item>
      </el-menu>
    </div>

  </div>
</template>

<script>
export default {
  name: "top-menu",
  props: {
    menus: Array,
    active: String
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

  #m {
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  #menuNav {
    float: left;
    border-bottom: none;
  }

  #menuNav li {
    height: 56px !important;
    line-height: 56px !important;
    font-size: 16px;
    margin-left: 50px;
  }
</style>