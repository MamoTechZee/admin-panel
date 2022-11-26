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
            <el-button type="primary">Create Videos</el-button>
        </div>
    </el-container>
    <el-container class="w-full flex justify-center items-center">
        <el-card style="width: 100%;">
            <el-table stripe :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="Id" width="80" />
                <el-table-column sortable prop="title" label="Title" width="200" />
                <el-table-column sortable prop="type" label="Type" width="200" />
                <el-table-column sortable prop="categories" label="Categories" width="200" />
                <el-table-column prop="image" label="Image" width="100" #default="scope">
                    <img :src=scope.row.image alt="" width="100">
                    <!-- <img style="width: 100px; height: 100px" src="scope.row.image" :fit="'contain'" /> -->
                </el-table-column>
                <el-table-column prop="stars" label="Stars" width="200" />
                <el-table-column prop="duration" label="Duration" width="" #default="scope">
                    <el-tag size="small">{{scope.row.duration}}</el-tag>
                </el-table-column>
                <el-table-column prop="status" label="Status" width="" #default="scope">
                    <el-switch v-model="scope.row.status" class="ml-2"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                </el-table-column>
                <el-table-column label="Action" width="220">
                    <router-link to="/video/edit">
                        <el-button type="primary">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-button>
                    </router-link>
                    <el-button type="primary" style="margin-left: 10px">
                        <el-icon>
                            <Delete />
                        </el-icon>
                    </el-button>
                </el-table-column>
            </el-table>
        </el-card>
    </el-container>
    <el-container style="width:100%;padding: 1rem; display: flex; justify-content: right; align-items: center;">
        <el-pagination background layout="total, prev, pager, next" :total="1000"></el-pagination>
    </el-container>
</template>
<script setup>
import { ref } from 'vue'
import { Search, More, Edit, Delete } from '@element-plus/icons';
import { ElContainer, ElIcon, ElButton, ElAvatar, ElTable, ElTableColumn, ElCard, ElPagination, ElInput, ElForm, ElSwitch } from "element-plus"
const input1 = ref('')

const tableData = [
    {
        id: '012345',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '12345',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: true,
    },
    {
        id: '23456',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '34567',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: true,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
]
</script>

<style>
.search {
    width: 88% !important;
}
.action{
    width: 12% !important;
    justify-content: flex-end;
    display: flex;
}
.action-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
}
</style>