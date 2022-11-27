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
            <el-button type="primary">Create User</el-button>
        </div>
    </el-container>
    <el-container class="w-full flex justify-center items-center">
        <el-card class="w-full">
            <el-table :data="tableData" class-name="w-full">
                <el-table-column prop="id" label="Id" />
                <el-table-column sortable prop="name" label="Nick name" #default="scope">
                    <el-avatar :size="25" :src="circleUrl" /> <b style="vertical-align: super;">{{ scope.row.name }}</b>
                </el-table-column>
                <el-table-column prop="email" label="Email" />
                <el-table-column sortable prop="status" label="Status" #default="scope">
                    <el-tag :type="(scope.row.status ? 'success' : 'danger')" effect="dark">Paid for</el-tag>
                </el-table-column>
                <el-table-column prop="locked" label="Locked" #default="scope">
                    <el-switch v-model="scope.row.status" class="ml-2"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                </el-table-column>
                <el-table-column label="Action">
                    <router-link to="/user/edit" class="edit-btn">
                        <el-button type="primary">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-button>
                    </router-link>
                    <router-link to="/user/edit" class="edit-btn">
                        <el-button type="primary">
                            <el-icon>
                                <Delete />
                            </el-icon>
                        </el-button>
                    </router-link>
                    <router-link to="/user/edit" class="edit-btn">
                        <el-button type="primary">
                            <el-icon>
                                <NoSymbolIcon />
                            </el-icon>
                        </el-button>
                    </router-link>
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
        id: '012345',
        name: 'Orgy',
        email: 'a@behance.com',
        status: false,
        locked: true
    },
    {
        id: '12345',
        name: 'BDMS',
        email: 'a@behance.com',
        status: true,
        locked: true
    },
    {
        id: '23456',
        name: 'Milf',
        email: 'a@behance.com',
        status: false,
        locked: true
    },
    {
        id: '34567',
        name: 'Teen',
        email: 'a@behance.com',
        status: true,
        locked: true
    },
    {
        id: '45678',
        name: 'JOI',
        email: 'a@behance.com',
        status: false,
        locked: true
    },
]
</script>

<style>
.search {
    width: 90% !important;
}

.action{
    width: 10% !important;
    align-items: center;
    width: 13% !important;
    justify-content: flex-end;
    display: flex;
}

.action-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
}

a {
    margin: 0 5px !important;
}

ul.el-page>li.number {
    background-color: white !important;
}
</style>