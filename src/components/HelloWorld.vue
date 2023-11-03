<template>
  <el-tabs v-model="activeName" class="ep-tab" @tab-click="handleClick">
    <el-tab-pane label="In-progress task" name="first">
      <BaseTable/>
    </el-tab-pane>
    <el-tab-pane label="Historic task" name="second">similar to in-progress task pane</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import {ref} from "vue";
import type {TabsPaneContext} from 'element-plus'
import BaseTable from "@/components/BaseTable.vue";

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
</style>
