<template style="background-color: grey!important">
    <el-container class="details-box" style="background-color: white; padding: 1rem;align-items: center;">
        <el-form ref="form" :label-position="'left'" label-width="200px" class="w-full">
            <el-form-item label="ID" class="w-2/6">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Nick name">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Avatar">
                <el-upload class="upload-demo">
                    <el-button type="primary" class="mr-1">Click to upload</el-button>
                    <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item label="E-mail" class="w-2/6">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Date of registration" class="w-2/6">
                <el-date-picker type="datetime" v-model="registerDate" placeholder="Select date and time">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Date activation subscription" class="w-2/6">
                <el-date-picker type="datetime" v-model="activationDate" placeholder="Select date and time">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Date expiration subscription" class="w-2/6">
                <el-date-picker type="datetime" v-model="subscriptionDate" placeholder="Select date and time">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Status">
                <el-switch v-model="status" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
            </el-form-item>
        </el-form>
    </el-container>
    <el-container class="details-box"
        style="margin-top:20px;background-color: white; padding: 1rem;align-items: center;">
        <el-form ref="form" :label-position="'left'" label-width="120px" class="w-full">

            <el-form-item label="User's message">
                <el-input type="textarea" :rows="2" placeholder="Please input">
                </el-input>
            </el-form-item>
            <el-button type="primary">Save</el-button>
        </el-form>
    </el-container>
    <el-container class="details-box"
        style="margin-top:20px;background-color: white; padding: 1rem;align-items: center;">
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="дата" fluid />
            <el-table-column sortable prop="title" label="приход" fluid />
            <el-table-column sortable prop="type" label="расход" fluid />
        </el-table>
    </el-container>
    <el-container class="details-box"
        style="margin-top:20px;background-color: white; padding: 1rem;align-items: center;">
        <el-table :data="tableData2" stripe style="width: 100%">
            <el-table-column prop="id" label="id" fluid />
            <el-table-column prop="title" label="name subscription" fluid />
            <el-table-column prop="" label="status" fluid>
                <el-switch class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
            </el-table-column>
            <el-table-column sortable prop="type" label="date activation" fluid />
            <el-table-column sortable prop="categories" label="date expiration" fluid />
        </el-table>
    </el-container>
    <section style="margin-top: 25px;">
        <el-button type="primary" style="width:150px">Save</el-button>
        <router-link to="/">
            <el-button type="info" style="margin-left: 10px;width:150px">Cancel</el-button>
        </router-link>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Search, More, Edit, Delete } from '@element-plus/icons';
import { ElContainer, ElIcon, ElButton, ElAvatar, ElTable, ElTableColumn, ElFormItem, ElUpload, ElDatePicker, ElCard, ElPagination, ElInput, ElForm, ElSwitch } from "element-plus"
const input1 = ref('')
const status = ref(true);
const registerDate = ref('')
const subscriptionDate = ref('')
const activationDate = ref('')
const radio1 = { radio1: 'New York' }
function handleRemove(file, fileList) {
    console.log(file, fileList);
}
function handlePreview(file) {
    console.log(file);
}
let value = []
let options = [{
    value: 'HTML',
    label: 'HTML'
}, {
    value: 'CSS',
    label: 'CSS'
}, {
    value: 'JavaScript',
    label: 'JavaScript'
}]

const tableData = [
    {
        id: '012345',
        title: '02.09.2022',
        type: '321$',
        categories: '321$',
        image: '/images/Rectangle 111.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '12345',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-1.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: true,
    },
    {
        id: '23456',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-2.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
]
const tableData2 = [
    {
        id: '012345',
        title: 'premium video',
        type: '02.09.2022',
        categories: '02.09.2022',
        image: '/images/Rectangle 111.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '12345',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-1.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: true,
    },
    {
        id: '23456',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-2.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
]
</script>

<style>
/* .details-box{
    font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
} */
.search {
    width: 80%;
}

.action-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
}

.el-input__wrapper {
    width: 100% !important;
}

.el-date-editor.el-input, .el-date-editor.el-input__wrapper{
    width: 100% !important;
}

.el-upload{
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    align-items: baseline !important;
}
</style>