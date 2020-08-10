<template>
  <div id="m">
    <div class="m-context">
      <!--菜单树-->
      <div class="menu-tree">
        <el-tree
            :data="menus"
            :props="treeProps"
            node-key="id"
            :default-expanded-keys="activeMenuNode"
            @node-click="openPage" />
      </div>

      <!--正文页面-->
      <div class="page-context">
        <div class="context-title">
          <el-breadcrumb
              v-if="activeMenu"
              separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{activeMenu.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="context-view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "context-menu",
    props: {
      menus: Array
    },

    data() {
      return {
        treeProps: {
          children: 'menus',
          label: 'name'
        },

        activeMenu: null,
        activeMenuNode: []
      }
    },

    methods: {
      openPage(data) {
        if (data.route) {
          this.activeMenu = data;
          this.$router.push({
            path: data.route
          });
          return true;
        }
        return false;
      },


    },
  }
</script>

<style scoped>
  #m {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .m-context{
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  .menu-tree {
    background: white;
    width: 15%;
    padding: 15px 0;
  }
  .page-context {
    background: white;
    width: 84%;
    padding: 20px 0;
  }

  .menu-tree >>> .el-tree-node__label{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #333333;
  }
  .context-title {
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>