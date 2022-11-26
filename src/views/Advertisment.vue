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
            <el-button type="primary">Create Companies</el-button>
        </div>
    </el-container>
    <el-container style="width: 100%;  display: flex; justify-content: center; align-items: center;">
        <el-card style="width: 100%;">
            <el-table :data="tableData" style="width: 100%;">
                <el-table-column sortable prop="type" label="Advertising company type" />
                <el-table-column sortable prop="startDate" #default="scope" label="Start Date">
                    <el-date-picker v-model="scope.row.startDate" type="date" placeholder="Pick a Start Date" size="large" />
                </el-table-column>

                <el-table-column sortable prop="endDate" #default="scope" label="End Date">
                    <el-date-picker v-model="scope.row.endDate" type="date" placeholder="Pick a Start Date" size="large" />
                </el-table-column>

                <el-table-column sortable prop="budget" label="Budget" />

                <el-table-column sortable prop="status" label="Status" width="250" #default="scope">
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
<script setup lang="ts">
import { ref } from 'vue'
import { NoSymbolIcon } from '@heroicons/vue/24/solid'
import { Search, More, Edit, Delete, CircleCloseFilled } from '@element-plus/icons';
import { ElContainer, ElIcon, ElButton, ElAvatar, ElTable, ElTableColumn, ElCard, ElPagination, ElInput, ElForm, ElSwitch, ElDatePicker } from "element-plus"
const input1 = ref('')

const tableData = [
    {
        type: 'context',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: true,
    },
    {
        type: 'Banner',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: false,
    },
    {
        type: 'Banner',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: true,
    },
    {
        type: 'Context',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: false,
    },
    {
        type: 'Context',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: true,
    },
    {
        type: 'context',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: false,
    },
    {
        type: 'Banner',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: true,
    },
    {
        type: 'context',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: true,
    },
    {
        type: 'Banner',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: false,
    },
    {
        type: 'context',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: false,
    },
    {
        type: 'Banner',
        startDate: '02/09/2022',
        endDate: '02/09/2022',
        budget: '312$',
        status: true,
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

a {
    margin: 0 5px !important;
}

ul.el-page>li.number {
    background-color: white !important;
}
</style>