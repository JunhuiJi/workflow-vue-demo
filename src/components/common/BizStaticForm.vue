<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="区域">
      <el-select v-model="form.region" placeholder="选择区域">
        <el-option label="区域1" value="shanghai" />
        <el-option label="区域2" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="时间">
      <el-col :span="11">
        <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="选择时间"
            style="width: 100%"
        />
      </el-col>
      <el-col :span="2" style="text-align: center">
        <span>-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
            v-model="form.date2"
            placeholder="选择时间"
            style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="立即发货">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="类型">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="线上" name="type" />
        <el-checkbox label="线下" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
<!--    <el-form-item>-->
<!--      <el-button type="primary" @click="onSubmit">Create</el-button>-->
<!--      <el-button>Cancel</el-button>-->
<!--    </el-form-item>-->
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  desc: '',
})
</script>
