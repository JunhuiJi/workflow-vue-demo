<template>
  <div>
    <div>
      高级查询
    </div>
    <div class="border" style="height: 40vh">
      <el-scrollbar style="height: 35vh">
        <el-form :model="form">
          <el-form-item label="流程定义名称">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="任务名称（精确）">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="任务名称（模糊）">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="任务描述（精确）">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="任务描述（模糊）">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="任务创建时间">
            <el-col :span="11">
              <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%"
              />
            </el-col>
            <el-col :span="2" style="text-align: center">
              <span>-</span>
            </el-col>
            <el-col :span="11">
              <el-date-picker
                  v-model="form.date2"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%"
              />
            </el-col>
          </el-form-item>
        </el-form>
      </el-scrollbar>
      <el-row :gutter="20">
        <el-col span="6">
          <el-button type="primary">重置</el-button>
        </el-col>
        <el-col span="6">
          <el-button type="primary">执行查询</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
})
</script>

<style scoped>
.border {
  border: 2px dashed var(--el-border-color);
}
</style>