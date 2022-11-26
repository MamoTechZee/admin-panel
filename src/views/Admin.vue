<script setup>
import {
    Aim,
    Menu as IconMenu,
    User,
    VideoPlay,
    Message,
    ArrowDown
} from "@element-plus/icons";
import {
    StarIcon,
    CheckCircleIcon,
    PaperClipIcon,
    BellIcon,
} from "@heroicons/vue/24/outline";
import { RouterLink, RouterView, useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { ref, watch } from "vue";
import { RefreshRight, BellFilled, GoodsFilled } from "@element-plus/icons";
import { ElContainer, ElIcon, ElAside, ElMenu, ElMenuItem, ElDropdown, ElButton, ElAvatar, ElDropdownMenu, ElHeader } from "element-plus"
const circleUrl = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
};
const route = Object.assign({}, useRoute())

const handleSelect = (key, keyPath) => {
    activeIndex = key;
    console.log(activeIndex)
};

let activeIndex = ref(0);

const menu = [
    {
        name: "Users",
        path: "/",
        icon: User,
    },
    {
        name: "Stars",
        path: "/stars",
        icon: StarIcon,
    },
    {
        name: "Categories",
        path: "/categories",
        icon: IconMenu,
    },
    {
        name: "Video",
        path: "/video",
        icon: VideoPlay,
    },
    {
        name: "Subscriptions",
        path: "/subscriptions",
        icon: CheckCircleIcon,
    },
    {
        name: "Appeals",
        path: "/appeals",
        icon: Message,
    },
    {
        name: "Advertisment",
        path: "/advertisment",
        icon: Aim,
    },
    {
        name: "Affiliate Program",
        path: "/affiliate-program",
        icon: PaperClipIcon,
    },
    {
        name: "Notifications",
        path: "/notifications",
        icon: BellIcon,
    },
];
</script>

<template>
    <el-container class="wrapper" style="height: 100%">
        <el-aside class="sidebar">
            <div class="brand">
                <img src="/img/logo/logo.svg" class="" alt="..." />
            </div>
            <el-menu text-color="#000" :default-active="activeIndex" @select="handleSelect" class="el-menu-vertical"
                @open="handleOpen" @close="handleClose">
                <template v-for="(item, index) in menu">
                    <RouterLink :to="item.path">
                        <el-menu-item :index="index" class="menu-item">
                            <em>
                                <component :is="item.icon" class="h-5" />
                            </em>
                            <span style="margin-left: 1rem; text-decoration: none">{{
                                    item.name
                            }}</span>
                        </el-menu-item>
                    </RouterLink>
                </template>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header :style="'background: rgb(242 243 245);'" class="header">
                <div class="toolbar">
                    <div class="refreh-data">
                        <el-icon :size="30">
                            <RefreshRight />
                        </el-icon>
                        <h3 style="margin-left: 1rem">
                            <b>{{ $route.name }}</b>
                        </h3>
                        <el-divider direction="vertical" />
                        <h4>This is a Description</h4>
                    </div>
                    <div class="action">
                        <el-dropdown style="margin-right: 0.25rem" placement="bottom-end" trigger="click">
                            <div>
                                <el-icon :size="20">
                                    <BellFilled />
                                </el-icon>
                            </div>
                        </el-dropdown>

                        <el-dropdown class="flex justify-between items-center mx-2">
                            <div class="flex justify-between items-center w-24">
                                <el-avatar :size="'small'" :src="circleUrl" class="mr-1" />
                                <span class="el-dropdown-link">
                                    John Doe
                                </span>

                            </div>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item command="a">Action 1</el-dropdown-item>
                                    <el-dropdown-item command="b">Action 2</el-dropdown-item>
                                    <el-dropdown-item command="c">Action 3</el-dropdown-item>
                                    <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                                    <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <el-dropdown>
                            <el-button style="margin: 0 5px">ENG </el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>English</el-dropdown-item>
                                    <el-dropdown-item>Spanish</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </div>
            </el-header>
            <el-main :style="'background: rgb(242 243 245);'">
                <RouterView />
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.wrapper {
    width: 100%;
}

.sidebar {
    width: 220px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    display: flex;
    flex-direction: column;
}

.brand {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
}

.h-5 {
    height: 1.25rem;
}

.menu-item:hover {
    text-decoration: none;
}

.el-menu a {
    text-decoration: none !important;
}

.el-menu-vertical {
    height: 100%;
}

.header {
    font-size: 16px;
    width: 100%;
    height: 4rem;
}

.toolbar {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}

.refreh-data {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
}

.action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
}

.el-divider--vertical {
    display: inline-block;
    width: 2px !important;
    height: 1em !important;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
}

/* .el-icon {
  height: 36px !important;
  width: 36px !important;
  margin: 10px 0px 0px !important;
} */

.profile-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
}
</style>
