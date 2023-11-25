<template>
  <div>
    <HistoricTaskNavigator/>
    <HistoricTaskFilter class="top-margin"/>
  </div>
</template>

<script setup lang="ts">
import HistoricTaskNavigator from "@/components/HistoricTask/HistoricTaskNavigator.vue";
import HistoricTaskFilter from "@/components/HistoricTask/HistoricTaskFilter.vue";
</script>

<style scoped>
.top-margin {
  margin-top: 20px;
}
</style>