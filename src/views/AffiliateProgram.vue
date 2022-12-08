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
        </div>
    </el-container>
    <el-container class="w-full flex justify-center items-center">
        <el-card class="w-full">
            <el-table :data="tableData" class-name="w-full">
                <el-table-column prop="id" label="Id" />
                <el-table-column sortable prop="name" label="Name" #default="scope">
                    <el-avatar :size="25" :src="circleUrl" /> <b style="vertical-align: super;">{{ scope.row.name }}</b>
                </el-table-column>
                <el-table-column prop="link" label="Link" #default="scope">
                    <el-link type="primary" :href="scope.row.link">{{scope.row.link}}</el-link>
                </el-table-column>
            </el-table>
        </el-card>
    </el-container>
    <el-container style="width:100%;padding: 1rem; display: flex; justify-content: right; align-items: center;">
        <el-pagination background layout="total, prev, pager, next" :total="1000"></el-pagination>
    </el-container>
</template>
<script setup>
import { ref } from 'vue';
import { NoSymbolIcon } from '@heroicons/vue/24/solid'
import { Search, More, Edit, Delete, CircleCloseFilled } from '@element-plus/icons';
import { ElContainer, ElIcon, ElButton, ElAvatar, ElTable, ElTableColumn, ElCard, ElPagination, ElInput, ElForm, ElSwitch } from "element-plus"
const input1 = ref('')
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';

const tableData = [
    {
        id: '2331221',
        name: 'Affiliate links',
        link: 'https://lenta.ru/news/2022/10/21/schwarzman/',
    },
    {
        id: '2331221',
        name: 'Affiliate links',
        link: 'https://lenta.ru/news/2022/10/21/schwarzman/',
    },
    {
        id: '2331221',
        name: 'Affiliate links',
        link: 'https://lenta.ru/news/2022/10/21/schwarzman/',
    },
    {
        id: '2331221',
        name: 'Affiliate links',
        link: 'https://lenta.ru/news/2022/10/21/schwarzman/',
    },
    {
        id: '2331221',
        name: 'Affiliate links',
        link: 'https://lenta.ru/news/2022/10/21/schwarzman/',
    },
]
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