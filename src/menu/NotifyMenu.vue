<template>
  <div id="m">
    <div class="content">
      <span>您好！{{user.name}} （ 账号:{{user.userId}} )</span>

      <el-divider direction="vertical"></el-divider>

      <span>个人中心</span>

      <el-divider direction="vertical"></el-divider>

      <span>退出</span>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    user: Object
  },

  data() {
    return {
    }
  }
}
</script>

<style scoped>
#m {
  background: #332828;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#m span {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #CCCCCC;
}
#m .el-divider {
  background-color: #CCCCCC;
}
</style>