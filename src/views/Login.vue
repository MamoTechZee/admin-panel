<script setup>
import { ref } from 'vue'
import { Warning } from '@element-plus/icons';
import {ElContainer,ElIcon, ElInput, ElImage, ElButton} from 'element-plus'
const login = ref('')
const password = ref('')
</script>

<template>
    <el-container class="main-container">
        <el-icon color="white" style="font-size: 24px;"><Warning /></el-icon>
        <el-container style="height: 100%; width: 100%;justify-content: space-between; padding: 1rem;">
            <div
                style="width: 50%; height: 100%; margin: 0 0.25rem; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <el-image :src="'images/logo.svg'" style="height: 10%; width:40%" lazy />
                <div class="login-form">
                    <h3 class="title">Authorization</h3>
                    <el-input v-model="login" placeholder="Login" style="margin: 1rem 0; width: 75%;"/>
                    <el-input v-model="password" placeholder="Password" style="margin: 1rem 0; width: 75%;"/>
                    <el-button type="primary" style="margin: 1rem 0; width: 75%;">Enter</el-button>
                </div>
            </div>
            <div
                style="width: 50%; height: 100%; margin: 0 0.25rem; display: flex; justify-content: center; align-items: center;">
                <el-image :src="'images/bg-login.svg'" lazy style="top: 50px;" />
            </div>
        </el-container>
    </el-container>
</template>

<style>
.main-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(180deg, #FD4869 32.82%, #922DA4 100%);
}

.login-form {
    width: 75%;
    height: 50%;
    margin-top: 1rem;
    background: #FFFFFF;
    border-radius: 9px;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
}

.title {
    font-family: 'Harmonia Sans Pro Cyr';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 90px;
    text-align: center;
    color: #606266;
}
</style>