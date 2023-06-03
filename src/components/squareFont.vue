<template>
    <div>
        <div class="category">
            <div class="back_color" :style="{ 'background': back }">
                <img :src=fonturl alt="font" class="font_img">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    back: String,
    imageUrl: String
})
var cate = props.imageUrl;
function judge() {
    if (cate == "smile") {
        let img = require("../data/ico/笑脸.png")
        return img
    }
    if (cate == "cry") {
        let img = require("../data/ico/差评哭脸.png")
        return img
    }
    if (cate == "person") {
        let img = require("../data/ico/个人信息.png")
        return img
    }
    if (cate == "personW") {
        let img = require("../data/ico/个人信息(white).png")
        return img
    }
}
const fonturl = judge()
</script>

<style>
.category{
    width: 221px;
    height: 227px;
    background-image: url(../data/ico/地点.png);
    position: relative;
}
.back_color{
    position: absolute;
    width: 72px;
    height: 72px;
    top: 55px;
    left: 75px;
    border-radius: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.font_img{
    width: 60px;
    height: 60px;
}
</style>