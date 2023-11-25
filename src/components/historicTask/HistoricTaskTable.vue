<template>
  <div>
    <div>
      任务表格工具栏
    </div>
    <el-row class="border">
      <el-col>
        <el-button type="primary" size="large" @click="refresh">刷新</el-button>
      </el-col>
    </el-row>
    <div class="top-margin">
      任务表格
    </div>
    <el-table
        :data="tableData"
        stripe
        border
        @selection-change="handleSelectionChange"
        ref="multipleTableRef"
        class="table border"
    >
      <el-table-column type="selection" width="55"/>
      <el-table-column property="id" label="ID"/>
      <el-table-column property="processDefinitionName" label="流程定义名称"/>
      <el-table-column property="name" label="名称"/>
      <el-table-column property="description" label="描述"/>
      <el-table-column property="creationDate" label="创建时间"/>
    </el-table>
    <div class="top-margin">
      业务操作工具栏
    </div>
    <el-row class="border">
      <div v-for="action in commonActions">
        <el-col>
          <el-button type="primary" class="action-button-margin" @click="handleAction(action)">{{ action }}</el-button>
        </el-col>
      </div>
    </el-row>
    <el-dialog
        v-model="dialogVisible"
        title="业务模块静态表单"
        width="30%"
    >
      <span>
        <BizStaticForm/>
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {ElMessage, ElTable} from 'element-plus'
import type {ComputedRef} from "@vue/reactivity";
import BizStaticForm from "@/components/common/BizStaticForm.vue";

interface UserTask {
  id: String
  processDefinitionName: String
  name: String
  description: String
  creationDate: String
  businessKey: String
  actions: String
}

const initialTableData: UserTask[] = [
  {
    id: '0',
    processDefinitionName: '流程定义名称-0',
    name: '任务名称-0-0',
    description: '描述-0-0',
    creationDate: '2023-10-01 10:00:00',
    businessKey: '0',
    actions: '业务操作-0#业务操作-1',
  },
  {
    id: '1',
    processDefinitionName: '流程定义名称-0',
    name: '任务名称-0-1',
    description: '描述-0-1',
    creationDate: '2023-10-01 10:00:00',
    businessKey: '1',
    actions: '业务操作-0#业务操作-1',
  },
  {
    id: '2',
    processDefinitionName: '流程定义名称-1',
    name: '任务名称-1-0',
    description: '描述-1-0',
    creationDate: '2023-10-01 10:00:00',
    businessKey: '2',
    actions: '业务操作-2#业务操作-3',
  },
  {
    id: '3',
    processDefinitionName: '流程定义名称-1',
    name: '任务名称-1-1',
    description: '描述-1-1',
    creationDate: '2023-10-01 10:00:00',
    businessKey: '3',
    actions: '业务操作-2#业务操作-3',
  },
]

let tableData = initialTableData;

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<UserTask[]>([])
const handleSelectionChange = (val: UserTask[]) => {
  multipleSelection.value = val
}

const commonActions: ComputedRef<String[]> = computed(() => {
  if (multipleSelection.value.length == 0) {
    return []
  }
  const actionsOfFirst = multipleSelection.value[0].actions
  for (const element of multipleSelection.value) {
    const actionsOfCurrent = element.actions
    if (actionsOfCurrent != actionsOfFirst) {
      return []
    }
  }
  return actionsOfFirst.split('#')
})

const dialogVisible = ref(false)
const handleAction = (action: String) => {
  switch (action) {
    case '业务操作-0':
    case '业务操作-2':
      ElMessage.success("Hello, " + action)
      break;
    case '业务操作-1':
    case '业务操作-3':
      dialogVisible.value = true
      break;
    default:
      throw new Error('action not supported!');
  }
}

const refresh = () => {
  tableData = initialTableData
}
</script>

<style scoped>
.top-margin {
  margin-top: 20px;
}

.action-button-margin {
  margin-right: 10px;
}

.table {
  height: 20vh;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.border {
  border: 2px dashed var(--el-border-color);
}
</style>