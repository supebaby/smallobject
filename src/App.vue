<template>
    <div class="app" :style="{ 'backgroundImage': 'url(' + backURL + ')' }">
        <div class="top">
            <div class="mearth"><img src="./data/ico/·MErth·.png" alt="mearth"></div>
            <div class="router_box">
                <div class="top_word"  v-if="data">
                    <router-link to="/record" class="router" replace @click="recordBackChange">记录</router-link>
                    <router-link to="/square" class="router" replace @click="squareBackChange">广场</router-link>
                    <router-link to="/activity" class="router" replace @click="activityBackChange">活动</router-link>
                </div>
            </div>
            <div class="top_ico">
                <div class="ico1">
                    <div class="img1"><img src="./data/ico/搜索.png" alt="search" width="40"></div>
                    <input type="text" class="search">
                </div>
                <div class="ico2" @click="backToHome">
                    <div>
                        <img src="./data/ico/个人信息.png" alt="person" width="55" >
                    </div>
                </div>
            </div>
        </div>
        <router-view ref="diary" @changeback="changeback"></router-view>
    </div>
</template>

<script>
import router from './router'

export default {
    data() {
        return {
            backURL: require('./data/back/homebackground.png'),
            data: 1,
        }
    },
    methods: {
        recordBackChange() {
            this.backURL = require('./data/back/record.png')
        },
        squareBackChange() {
            this.backURL = require('./data/back/square.png')
        },
        activityBackChange() {
            this.backURL = require('./data/back/activity.png')
        },
        changeback() {
            this.backURL = require('./data/back/diary.png')
            this.data = 0;
        },
        backToHome() {
            this.data = 1;
            router.push({
                path: "/"
            })
        }
    }
}
</script>

<style>
.app {
    margin: 0 auto;
    width: 1920px;
    height: 1080px;
}

* {
    margin: 0;
    padding: 0;
}

.top {
    width: 1920px;
    height: 172px;
    background-image: url(./data/back/top.png);
    display: flex;
    align-items: center;
}
.mearth {
    margin-left: 120px;
    width: 293px;
    height: 30px;
}

.top_word {
    width: 564px;
    height: 172px;
    display: flex;
    justify-content: space-between;
    line-height: 172px;
}

.router_box {
    margin-left: 310px;
    width: 564px;
    height: 172px;
}

.top_ico {
    margin-left: 225px;
    width: 550px;
    height: 172px;
    display: flex;
    align-items: center;
}

.router {
    color: black;
    font-size: 31.13px;
    outline: none;
    font-family: "Righteous";
    text-decoration: none;
}

.router-link-active {
    text-decoration: underline;
}

.ico1 {
    width: 247px;
    height: 74px;
    background: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
}

.img1 {
    margin-left: 20px;
    width: 40px;
    height: 40px;
}

.search {
    width: 150px;
    margin-left: 13px;
    height: 40px;
    outline: none;
    border: none;
    font-size: 25px;
}

.ico2 {
    width: 74px;
    height: 74px;
    margin-left: 45px;
    border-radius: 74px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}</style>