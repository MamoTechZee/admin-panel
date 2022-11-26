<script setup>
import { ref } from 'vue'
import { Search, More, Edit, Delete } from '@element-plus/icons';
import { ElContainer, ElButton,  ElInput, ElForm, ElSwitch, ElFormItem, ElRadioGroup, ElSelect, ElDatePicker, ElRadioButton,ElUpload } from "element-plus"
const input1 = ref('')
const radio1 = { radio1:'New York'}
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
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
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
    {
        id: '34567',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-3.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: true,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-4.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-4.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-4.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-4.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
    {
        id: '45678',
        title: 'Femdom',
        type: 'context',
        categories: 'Femdom',
        image: '/images/Rectangle 111-4.png',
        stars: 'Alina Melou',
        duration: '1:20',
        status: false,
    },
]
</script>

<template>
    <el-container class="details-box" style="background-color: white; padding: 1rem;align-items: center;">
        <el-form ref="form"  :label-position="'left'" label-width="120px" class="w-full">
            <el-form-item label="Activity name" class="w-full">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Description" class="w-full">
                <el-input type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item label="Keywords" class="w-full">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
        </el-form>
    </el-container>
    <el-container class="details-box mt-5 bg-white p-4 items-center">
        <el-form ref="form"  :label-position="'left'" label-width="120px" class="w-full">
            <el-radio-group v-model="radio1" >
                <el-radio-button label="Video" ></el-radio-button>
                <el-radio-button label="Gallery"></el-radio-button>
                <el-radio-button label="Image preview"></el-radio-button>
            </el-radio-group>

            <el-upload class="upload-demo" style="margin-top: 20px" :on-preview="handlePreview" :on-remove="handleRemove" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture">
                <el-button type="primary">Click to upload</el-button>
                <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </el-upload>

            <el-form-item label="ID" class="w-2/6">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Category" class="w-full">
                <el-input placeholder="Please input"></el-input>
            </el-form-item>
            <el-form-item label="Stars" class="w-full">
                <el-input type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="Tags" class="w-full">
                <el-select v-model="value" multiple filterable allow-create default-first-option
                    placeholder="Choose tags for your article" class="w-full">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Duration" class="w-2/6">
                <el-input :rows="2" placeholder="description" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="Release Date" class="w-2/6">
                <el-date-picker type="datetime" placeholder="Select date and time">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Subscribe type">
                <el-switch active-color="#13ce66" inactive-color="#ff4949">
                </el-switch>
            </el-form-item>
            <el-button type="primary">Save</el-button><el-button type="info">Reset</el-button>
        </el-form>
    </el-container>
</template>

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