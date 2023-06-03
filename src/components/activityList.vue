<template>
    <div class="activity_background">
        <div class="activity_list" :style="{ 'backgroundImage': 'url(' + backURL + ')' }">
            <div class="date">
                <div class="date_year">{{year}}</div>
                <div class="date_mouth">{{mouth}}</div>
            </div>
            <div class="describe">
                <div class="about_content">{{aboutContent}}</div>
                <div class="content_english">{{englishContent}}</div>
                <div class="content_jump">></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imageUrl: String,
    year: String,
    mouth: String,
    aboutContent: String,
    englishContent: String,
})
var image = props.imageUrl;
function judge() {
    if (image) {
        let imgU = image + ".png";
        console.log(imgU)
        let img = require("../data/back/" + imgU)
        return img
    }
}
const backURL = judge()
</script>

<style>
.activity_background {
    width: 1376px;
    height: 353px;
    background-image: url(../data/back/activityBack.png);
    border-radius: 40px;
    background-size: cover;
}

.activity_list {
    width: 1376px;
    height: 353px;
    border-radius: 40px;
    background-size: cover;
    display: flex;
    justify-content: space-between;
}

.date {
    width: 277px;
    height: 353px;
    position: relative;
}

.date_year {
    position: absolute;
    left: 20px;
    font-size: 159.2px;
    font-family: "try";
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
}
.date_mouth{
    position: absolute;
    top: 140px;
    left: 20px;
    font-size: 159.2px;
    font-family: "try";
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
}
.describe{
    width: 600px;
    height: 353px;
}
.about_content{
    font-size: 73.17px;
    font-family: "try";
    padding-left: 50px;
    letter-spacing: 13px;
    height: 85px;
    margin-top: 28px;
}
.content_english{
    width: 300px;
    height: 60px;
    font-size: 54.93px;
    font-family: "Righteous";
    margin-top: 10px;
    color: #f22e2e;
    padding-left: 320px;
    letter-spacing: 12px;
}
.content_jump{
    font-size: 87.13px;
    padding-left: 500px;
    margin-top: 50px;
}
</style>