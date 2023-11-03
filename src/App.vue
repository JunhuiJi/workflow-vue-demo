<template>
  <el-container style="height: 100%">
    <el-header>
      <BaseHeader/>
    </el-header>
    <el-main>
      <HelloWorld/>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import BaseHeader from "@/components/BaseHeader.vue";
</script>

<style scoped>
</style>
