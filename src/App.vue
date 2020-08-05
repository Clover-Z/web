<template>
  <div id="app">
    <el-container>
      <el-header>0</el-header>
      <el-header>1</el-header>
      <el-aside>2</el-aside>
      <el-main>3</el-main>
      <el-footer>4</el-footer>
    </el-container>
  </div>
</template>

<script>

import ElContainer from "element-ui/packages/container/src/main";
import ElFooter from "element-ui/packages/footer/src/main";
import ElHeader from "element-ui/packages/header/src/main"
import ElAside from "element-ui/packages/aside/src/main"
import ElMain from "element-ui/packages/main/src/main"

export default {
  name: 'App',
  components: {
      ElFooter,
      ElContainer,
      ElHeader,
      ElAside,
      ElMain

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
