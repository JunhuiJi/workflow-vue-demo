<template>
  <el-container class="container">
    <el-aside class="aside top-margin">
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
  height: 100vh;
}

.top-margin {
  margin-top: 20px;
}
</style>