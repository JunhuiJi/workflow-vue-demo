<template>
  <div>
    <div>
      任务导航
    </div>
    <div class="border" style="height: 30vh">
      <el-scrollbar>
        <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expand-all="true"
            :default-checked-keys="[0]"
            :props="defaultProps"
        />
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
const defaultProps = {
  children: 'children',
  label: 'label',
}
const data = [
  {
    id: 0,
    label: '全部',
    children: [
      {
        id: 1,
        label: '流程定义名称-0',
        children: [
          {
            id: 2,
            label: '任务名称-0-0',
          },
          {
            id: 3,
            label: '任务名称-0-1',
          },
        ],
      },
      {
        id: 4,
        label: '流程定义名称-1',
        children: [
          {
            id: 5,
            label: '任务名称-1-0',
          },
          {
            id: 6,
            label: '任务名称-1-1',
          },
        ],
      },
    ]
  }
]
</script>

<style scoped>
.border {
  border: 2px dashed var(--el-border-color);
}
</style>