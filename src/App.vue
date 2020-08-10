<template>
  <div id="app">

    <!--用户状态栏-->
    <div class="user-header">
      <notify-menu :user="user"></notify-menu>
    </div>

    <!--导航菜单栏-->
    <div class="menu-header">
      <top-menu :menus="topMenu" :active.sync="activeTopMenu"></top-menu>
    </div>

    <!--正文区域-->
    <div class="menu-context">
      <context-menu :menus="treeMenu"></context-menu>
    </div>
  </div>
</template>

<script>
import {UserInfo, Menus} from "./test/data"

import NotifyMenu from "./menu/NotifyMenu";
import TopMenu from "./menu/TopMenu";
import ContextMenu from "./menu/ContextMenu";

export default {
  name: 'App',
  components: {
    ContextMenu,
    TopMenu,
    NotifyMenu
  },

  data() {
    return {
      user: UserInfo,
      topMenu: Menus,
      activeTopMenu: Menus[0].id,
      treeMenu: Menus[0].menus
    }
  },

  watch: {
    activeTopMenu(newVal) {
      this.topMenu.forEach((top)=> {
        if (top.id == newVal) {
          this.treeMenu = top.menus;
          return
        }
      })
    }
  },

}
</script>

<style>
  #app {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .user-header {
    width: 100%;
    height: 32px;
  }

  .menu-header {
    height: 56px;
    width: 100%;
  }

  .menu-context {
    width: 100%;
    height: 680px;
  }

</style>
