<template>
  <el-menu
      mode="horizontal"
  >
    <el-menu-item index="1">
      <RouterLink to="/" class="text">待办任务</RouterLink>
    </el-menu-item>
    <el-menu-item index="2">
      <RouterLink to="/historic" class="text">历史任务</RouterLink>
    </el-menu-item>
  </el-menu>
  <RouterView/>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<style scoped>
.text {
  font-size: 18px;
}
</style>
