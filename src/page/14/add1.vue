<template>
  <div>
    <el-container class="page-container" v-show="show">

      <el-header class="p14sec-header">
        <el-row :gutter="24">
          <el-col :span="24">
            <i class="el-icon-setting">  请选择任务类型</i>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-divider />
          </el-col>
        </el-row>
      </el-header>

      <el-main class="card-main">
        <el-card shadow="hover" @click.native="openAddPage('笔笔攒任务')">
          笔笔攒任务
        </el-card>

        <el-card shadow="hover" @click.native="openAddPage('会员任务')">
          会员任务
        </el-card>

        <el-card shadow="hover" @click.native="openAddPage('绑卡任务')">
          绑卡任务
        </el-card>
      </el-main>
    </el-container>

    <router-view v-if="!show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },

  watch: {
    '$route': function (nVal) {
      this.show = (nVal.path == '/page14/add') ? true : false;
    },
  },

  methods: {
    openAddPage(type) {
      this.show = false;
      this.$router.push({
        path: '/page14/add/add2',
        query: {
          type: type
        }
      })
    },
  },
}
</script>

<style scoped>
.p14sec-header {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 20px;
} .el-divider--horizontal { margin: 10px 0; height: 1px; }
.card-main {
  display: flex;
  padding: 0;
}
.card-main .el-card {
  width: 250px;
  height: 100px;
  margin: 10px 20px 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>