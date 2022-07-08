<template>
  <div class="aside">
    <div class="top">
      <img src="http://manager.9yuecloud.com/img/logo.384b81fb.png" />
      <h1>Manager</h1>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1-4">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.aside {
  position: fixed;
  width: 200px;
  height: 100vh;
  background-color: #001529;
  color: #fff;
  overflow-y: auto;
  .top {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    img {
      width: 32px;
      height: 32px;
      margin: 10px 10px 10px 0;
    }
  }
}
</style>
