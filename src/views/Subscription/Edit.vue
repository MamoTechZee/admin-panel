<template style="background-color: grey!important">
    <el-container class="details-box" style="background-color: white; padding: 1rem;align-items: center;">
        <el-form ref="form" :label-position="'left'" label-width="120px" class="w-full">
            <el-form-item label="ID" class="w-2/6">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Title">
                <el-input :rows="2" type="textarea" placeholder="Please input" />
            </el-form-item>

            <el-form-item label="Description">
                <el-input :rows="2" type="textarea" placeholder="Please input" />
            </el-form-item>
            <el-form-item label="Date" class="w-2/6">
                <el-date-picker type="datetime" placeholder="Select date and time">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Price" class="w-2/6">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Old price" class="w-2/6">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Status">
                <el-switch class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
            </el-form-item>
            <section style="margin-top: 25px;">
                <el-button type="primary" style="width:150px">Save</el-button>
                <router-link to="/subscriptions">
                    <el-button type="info" style="margin-left: 10px;width:150px">Cancel</el-button>
                </router-link>
            </section>
        </el-form>
    </el-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Search, More, Edit, Delete } from '@element-plus/icons';
import { ElContainer, ElButton,  ElInput, ElForm, ElSwitch, ElFormItem, ElRadioGroup, ElSelect, ElDatePicker, ElRadioButton,ElUpload } from "element-plus"
const input1 = ref('')
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