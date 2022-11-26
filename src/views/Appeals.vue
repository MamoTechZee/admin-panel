<template>
     <el-container class="flex justify-between items-center h-16 w-full">
        <div class="search pr-2">
            <el-input v-model="input1" placeholder="Search..." :suffix-icon="Search" />
        </div>
        <div class="action">
            <el-button>
                <el-icon>
                    <More />
                </el-icon>
            </el-button>
            <el-button type="primary">Create Appeals</el-button>
        </div>
    </el-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Search, More } from '@element-plus/icons';
import { ElContainer, ElIcon, ElButton, ElInput } from "element-plus"
const input1 = ref('')
</script>

<style>
.search {
    width: 80%;
}

.action-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
}
</style>