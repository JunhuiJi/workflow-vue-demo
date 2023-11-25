<template>
  <el-container class="container">
    <el-aside class="aside top-margin">
      <OngoingTaskAside/>
    </el-aside>
    <el-container>
      <el-main>
        <OngoingTaskMain/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import OngoingTaskAside from "@/components/ongoingTask/OngoingTaskAside.vue";
import OngoingTaskMain from "@/components/ongoingTask/OngoingTaskMain.vue";
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