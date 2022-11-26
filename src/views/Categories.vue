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
            <el-button type="primary">Create Categories</el-button>
        </div>
    </el-container>
    <el-container>
        <el-card style="width: 100%;">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="Id"/>
                <el-table-column sortable prop="name" label="Name"  />
                <el-table-column prop="image" label="Image"  #default="scope">
                    <img :src=scope.row.image alt="" style="width: 50px; height: 50px">
                    <!-- <img style="width: 100px; height: 100px" src="scope.row.image" :fit="'contain'" /> -->
                </el-table-column>
                <!-- <el-table-column #default="scope" label="Image" width="280"> -->
                    <!-- {{scope.row.image}} -->
                    <!-- <img :src=scope.row.image alt=""> -->
                    <!-- <el-image style="width: 100px; height: 100px" :src="scope.row.image" :fit="'contain'" /> -->
                <!-- </el-table-column> -->
                <el-table-column prop="status" label="Status" #default="scope">
                    <el-switch v-model="scope.row.status" class="ml-2"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                </el-table-column>
                <el-table-column sortable prop="sorting" label="Sorting"  #default="scope">
                    <el-input :value="scope.row.sorting" style="width:50px"></el-input>
                </el-table-column>
                <el-table-column label="Action">
                    <el-button type="primary">
                        <el-icon>
                            <Edit />
                        </el-icon>
                    </el-button>
                    <el-button type="primary">
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
<script setup lang="ts">
import { ref } from 'vue'
import { Search, More, Edit, Delete } from '@element-plus/icons';
import { ElContainer, ElIcon, ElButton, ElAvatar, ElTable, ElTableColumn, ElCard, ElPagination, ElInput, ElForm,ElSwitch } from "element-plus"
const input1 = ref('')

const tableData = [
    {
        id: '012345',
        name: 'Orgy',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        status: false,
        sorting: '10'
    },
    {
        id: '12345',
        name: 'BDMS',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        status: true,
        sorting: '4'
    },
    {
        id: '23456',
        name: 'Milf',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        status: false,
        sorting: '2'
    },
    {
        id: '34567',
        name: 'Teen',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        status: true,
        sorting: '10'
    },
    {
        id: '45678',
        name: 'JOI',
        image: 'https://photoscissors.com/images/samples/3-before.jpg',
        status: false,
        sorting: '22'
    },
]
</script>

<style>
.search {
    width: 87% !important;
}

.action{
    width: 13% !important;
}

.action-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
}
</style>