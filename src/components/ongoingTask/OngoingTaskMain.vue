<template>
  <div>
    <OngoingTaskTable/>
    <RelatedInfoPane class="top-margin"/>
  </div>
</template>

<script setup lang="ts">
import OngoingTaskTable from "@/components/ongoingTask/OngoingTaskTable.vue";
import RelatedInfoPane from "@/components/common/RelatedInfoPane.vue";
</script>

<style scoped>
.top-margin {
  margin-top: 20px;
}
</style>