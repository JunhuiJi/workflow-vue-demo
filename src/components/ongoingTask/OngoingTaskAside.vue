<template>
  <div>
    <OngoingTaskNavigator/>
    <OngoingTaskFilter class="top-margin"/>
  </div>
</template>

<script setup lang="ts">
import OngoingTaskNavigator from "@/components/ongoingTask/OngoingTaskNavigator.vue";
import OngoingTaskFilter from "@/components/ongoingTask/OngoingTaskFilter.vue";
</script>

<style scoped>
.top-margin {
  margin-top: 20px;
}
</style>