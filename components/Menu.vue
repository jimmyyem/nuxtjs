<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :router="true"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="/type">
      <template slot="title">类型支持</template>
      <el-menu-item index="/type/string">String</el-menu-item>
      <el-menu-item index="/type/hash">Hash</el-menu-item>
      <el-menu-item index="/type/list">List</el-menu-item>
      <el-menu-item index="/type/set">Set</el-menu-item>
      <el-menu-item index="/type/zset">ZSet</el-menu-item>
      <el-menu-item index="/type/transaction">Transaction</el-menu-item>
      <el-menu-item index="/type/hyperlog">Hyperlog</el-menu-item>
      <el-menu-item index="/type/pipeline">Pipeline</el-menu-item>
    </el-submenu>
    <el-submenu index="/support">
      <template slot="title">客户端支持</template>
      <el-menu-item index="/support/node">Nodejs</el-menu-item>
      <el-menu-item index="/support/php">php</el-menu-item>
      <el-menu-item index="/support/golang">Golang</el-menu-item>
    </el-submenu>
    <el-menu-item index="/product">商城</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>
