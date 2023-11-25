<template>
  <div>
    <HistoricTaskTable/>
    <RelatedInfoPane class="top-margin"/>
  </div>
</template>

<script setup lang="ts">
import HistoricTaskTable from "@/components/HistoricTask/HistoricTaskTable.vue";
import RelatedInfoPane from "@/components/common/RelatedInfoPane.vue";
</script>

<style scoped>
.top-margin {
  margin-top: 20px;
}
</style>