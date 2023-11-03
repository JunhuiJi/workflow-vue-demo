<template>
    <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose">
        <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[0]"
            :props="defaultProps"
        />
    </el-menu>
</template>

<script lang="ts" setup>
const defaultProps = {
    children: 'children',
    label: 'label',
}
const data = [
    {
        id: 0,
        label: 'ALL',
        children: [
            {
                id: 1,
                label: 'process-definition-name-0',
                children: [
                    {
                        id: 2,
                        label: 'user-task-name-0-0',
                    },
                    {
                        id: 3,
                        label: 'user-task-name-0-1',
                    },
                ],
            },
            {
                id: 4,
                label: 'process-definition-name-1',
                children: [
                    {
                        id: 5,
                        label: 'user-task-name-1-0',
                    },
                    {
                        id: 6,
                        label: 'user-task-name-1-1',
                    },
                ],
            },
        ]
    }
]

import { ref } from "vue";
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo {
  height: 100%;
}
</style>