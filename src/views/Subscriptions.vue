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
            <el-button type="primary">Create Subscriptions</el-button>
        </div>
    </el-container>

    <el-container class="w-full flex justify-center items-center">
        <el-card style="width: 100%;">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="Id" width="200" />
                <el-table-column prop="price" label="Price" width="300" />
                <el-table-column prop="duration" label="Duration" width="" #default="scope">
                    <el-tag size="small">{{ scope.row.duration }}</el-tag>
                </el-table-column>

                <el-table-column prop="description" label="Description" width="250" />
                <el-table-column prop="imageBanner" #default="scope" label="Image" width="280">
                    <img :src=scope.row.imageBanner width="100" alt="">
                </el-table-column>
                <el-table-column prop="status" label="Status" width="250" #default="scope">
                    <el-switch v-model="scope.row.status" class="ml-2"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                </el-table-column>

                <el-table-column label="Action" width="180">
                    <router-link to="/subscription/edit">
                        <el-button type="primary" style="margin-right: 10px;">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-button>
                    </router-link>
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
import { ref } from "vue";
import { Search, More, Edit, Delete } from '@element-plus/icons';
import { ElContainer, ElIcon, ElButton, ElAvatar, ElTable, ElTableColumn, ElCard, ElPagination, ElInput, ElForm, ElSwitch, ElTag } from "element-plus"
const input1 = ref("");
const tableData = [
    {
        id: "012345",
        price: "352$",
        duration: "15:00",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        imageBanner: "https://photoscissors.com/images/samples/3-before.jpg",
        status: true,
    },
    {
        id: "123456",
        price: "500$",
        duration: "10:00",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        imageBanner: "https://photoscissors.com/images/samples/3-before.jpg",
        status: false,
    },
    {
        id: "234567",
        price: "400$",
        duration: "20:00",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        imageBanner: "https://photoscissors.com/images/samples/3-before.jpg",
        status: true,
    },
];
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
