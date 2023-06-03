<template>
    <div>
        <div class="list_box">
            <div class="list_img"><img class="img" :src=imageUrl></div>
            <div class="list_number">
                <div class="year">{{ data }}</div>
                <div class="mouth">06</div>
                <div class="jump">></div>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: String,
    imageUrl: String
})
var image = props.imageUrl;
function judge() {
    if (image) {
        let imgU = image + ".jpg";
        console.log(imgU)
        let img = require("../data/back/" + imgU)
        return img
    }
}
const imageUrl = judge()
// let img = require("../data/back/" + imgUrl)
// export default {
//     props: ["data",'imageUrl'],
//     // data() {
//     //     return {
//     //         backURL: require('../data/back/沙滩.jpg')
//     //     }
//     // }
// }
</script>

<style>
.img{
    height: 370px;
    width: 235px;
    border-radius: 20px;
}
.list_box {
    width: 480px;
    height: 450px;
    border-radius: 40px;
    background: #fffcf6;
    display: flex;
    /* background: chartreuse; */
}

.list_img {
    margin-top: 10px;
    height: 370px;
    width: 235px;
    margin-left: 10px;
}

.list_number {
    width: 205px;
    height: 450px;
}

.year {
    width: 170px;
    height: 120px;
    margin-top: 0px;
    margin-left: 35px;
    font-size: 122.51px;
    font-family: "try";
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: transparent;
}

.mouth {
    width: 80px;
    height: 50px;
    margin-top: 20px;
    margin-left: 110px;
    font-size: 62.84px;
    font-family: "try";
}

.jump {
    width: 27px;
    height: 29px;
    margin-top: 135px;
    margin-left: 160px;
    font-size: 58.98px;
    color: #d88b47;
}
</style>