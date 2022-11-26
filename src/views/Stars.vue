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
            <el-button type="primary">Create Star</el-button>
        </div>
    </el-container>

    <el-container class="w-full flex justify-center items-center">
        <el-card style="width: 100%;">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="Id" />
                <el-table-column sortable class="column-name"
                    style="display: flex; justify-content:flex-start; align-items:center" prop="name" label="Name"
                    #default="scope">
                    <el-avatar :size="25" :src="circleUrl" />
                    <span style="margin-left: 1rem;">{{ scope.row.name }}</span>
                </el-table-column>
                <el-table-column sortable prop="numberVideo" label="Number Video" />
                <el-table-column sortable prop="numberLikes" label="Number Likes" />
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
<script setup>
import { ref } from 'vue'
import { Search, More, Edit, Delete } from '@element-plus/icons';
import { ElContainer, ElIcon, ElButton, ElAvatar, ElTable, ElTableColumn, ElCard, ElPagination, ElInput, ElForm } from "element-plus"
const input1 = ref('')
const circleUrl =
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
const tableData = [
    {
        id: '012345',
        name: 'trex',
        numberVideo: 12,
        numberLikes: 1500,

    },
    {
        id: '12345',
        name: 'mrax',
        numberVideo: 12,
        numberLikes: 1500,
    },
    {
        id: '23456',
        name: 'Milf',
        numberVideo: 12,
        numberLikes: 1500,
    },
    {
        id: '34567',
        name: 'Teen',
        numberVideo: 12,
        numberLikes: 1500,
    },
    {
        id: '45678',
        name: 'JOI',
        numberVideo: 12,
        numberLikes: 1500,
    },
]
</script>

<style>
.search {
    width: 90% !important;
}

.action {
    width: 10% !important;
}

.action-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
}

.el-table .cell {
    display: flex !important;
    align-items: center !important;
}
</style>