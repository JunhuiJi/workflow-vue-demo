<template>
  <div>
    <div>
      相关信息
    </div>
    <div class="border">
      <el-row :gutter="20">
        <el-col :span="12">
          <HistoricProcessInstanceTable class="top-margin"/>
        </el-col>
        <el-col :span="12">
          <HistoricTaskTable class="top-margin"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HistoricTaskTable from "@/components/common/HistoricTaskTable.vue";
import HistoricProcessInstanceTable from "@/components/common/HistoricProcessInstanceTable.vue";
</script>

<style scoped>
.top-margin {
  margin-top: 20px;
}

.border {
  border: 2px dashed var(--el-border-color);
}
</style>
<script setup lang="ts">
</script>