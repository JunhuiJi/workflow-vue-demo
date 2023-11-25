<template>
  <el-container class="container">
    <el-aside class="aside">
      <HistoricTaskAside/>
    </el-aside>
    <el-container>
      <el-main>
        <HistoricTaskMain/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import HistoricTaskAside from "@/components/HistoricTask/HistoricTaskAside.vue";
import HistoricTaskMain from "@/components/HistoricTask/HistoricTaskMain.vue";
</script>

<style scoped>
.aside {
  width: 20vw;
}

.container {
  height: 80vh;
}
</style>