<template>
  <el-container>
    <el-aside>
      <div>
        user task filter pane
      </div>
      <BaseSide class="border"/>
    </el-aside>
    <el-main>
      <el-col>
        <div>
          user task toolbar
        </div>
        <el-row class="border">
          <el-button size="large" @click="refresh">refresh</el-button>
        </el-row>
        <div class="top-margin">
          user task table pane
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
          <el-table-column property="creationDate" label="CreationDate">
            <!--            <template #default="scope">{{ scope.row.date }}</template>-->
          </el-table-column>
          <el-table-column property="processDefinitionName" label="ProcessDefinitionName"/>
          <el-table-column property="userTaskName" label="UserTaskName"/>
          <el-table-column property="businessKey" label="BusinessKey"/>
          <el-table-column property="actions" label="Actions(for demonstration)"/>
        </el-table>
      </el-col>
      <div class="top-margin">
        user task action button pane
      </div>
      <el-row class="border">
        <div v-for="action in commonActions">
          <el-button type="primary" class="action-button-margin" @click="handleAction(action)">{{ action }}</el-button>
        </div>
      </el-row>
    </el-main>
  </el-container>

  <el-dialog
      v-model="dialogVisible"
      title="Complicated static form"
      width="30%"
  >
    <span>
      <StaticForm/>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {ElMessage, ElTable} from 'element-plus'
import BaseSide from "@/components/BaseSide.vue";
import type {ComputedRef} from "@vue/reactivity";
import StaticForm from "@/components/StaticForm.vue";

interface UserTask {
  creationDate: string
  processDefinitionName: string
  userTaskName: string
  businessKey: string
  actions: String
}

const initialTableData: UserTask[] = [
  {
    creationDate: '2023-10-23',
    processDefinitionName: 'process-definition-name-0',
    userTaskName: 'user-task-name-0-0',
    businessKey: '0',
    actions: 'ButtonAction0.java#ButtonAction1.java',
  },
  {
    creationDate: '2023-10-23',
    processDefinitionName: 'process-definition-name-0',
    userTaskName: 'user-task-name-0-1',
    businessKey: '1',
    actions: 'ButtonAction0.java#ButtonAction1.java',
  },
  {
    creationDate: '2023-10-23',
    processDefinitionName: 'process-definition-name-1',
    userTaskName: 'user-task-name-1-0',
    businessKey: '2',
    actions: 'ButtonAction2.java#ButtonAction3.java',
  },
  {
    creationDate: '2023-10-23',
    processDefinitionName: 'process-definition-name-1',
    userTaskName: 'user-task-name-1-1',
    businessKey: '3',
    actions: 'ButtonAction2.java#ButtonAction3.java',
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
    case 'ButtonAction0.java':
    case 'ButtonAction2.java':
      ElMessage.success("Hello, " + action)
      break;
    case 'ButtonAction1.java':
    case 'ButtonAction3.java':
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

<style>
.top-margin {
  margin-top: 20px;
}

.action-button-margin {
  margin-right: 10px;
}

.table {
  height: 50vh;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.border {
  border: 2px dashed var(--el-border-color);
}
</style>