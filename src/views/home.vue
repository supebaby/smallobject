<template>
    <div style="display: flex; position: relative;">
        <div class="rectangle">
            <div class="rectangle_outline">
                <div class="outline_line"></div>
                <div class="outline_line"></div>
            </div>
        </div>
        <div class="center_img">
            <div class="home_img"><img src="../data/back/home.png" alt="home" style="z-index: 10000;;"></div>
        </div>
        <div class="fuzzy_img"><img src="../data/back/topFuzzy.png" alt="topFuzzy"></div>
        <div class="font1">06</div>
        <div class="font1" style="top: 250px;">23</div>
        <div class="data_box">
            <div class="for_data">For 06/23</div>
            <div class="accumulate_data">日积月累.</div>
            <div class="time_content">Time files</div>
        </div>
        <router-link to="/diary" class="font_jump" @click="backdiaryChange" replace>></router-link>
        <div class="font_cycle"><img src="../data/ico/转换.png" alt="cycle" width="37"></div>
    </div>
</template>

<script >
export default {
    emits: ["backURL"],
    data() {
        return {
            backURL: "../data/back/diary.png"
        }
    },
    methods: {
        backdiaryChange() {
            this.$emit("changeback", this.backURL);
        },
    }
}
</script>

<style>
.rectangle {
    width: 130px;
    height: 908px;
}

.rectangle_outline {
    /* position: absolute; */
    width: 40px;
    height: 490px;
    background: #062f44;
    /* top: 120px;
    left: 100px; */
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 120px;
    z-index: 100;
    margin-left: 100px;
}

.outline_line {
    width: 3px;
    height: 246px;
    border-radius: 3px;
    background: #a8b6bd;
    margin-left: 6px;
}

.center_img {
    width: 930px;
    height: 908px;
}

.home_img {
    margin-top: 50px;
}

.fuzzy_img {
    width: 860px;
    margin-top: 40px;
}

.font1 {
    font-size: 265.51px;
    font-family: 'try';
    color: white;
    width: 340px;
    height: 300px;
    position: absolute;
    top: 10px;
    right: 49px;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
}

.data_box {
    width: 630px;
    height: 240px;
    position: absolute;
    top: 550px;
    left: 930px;
}

.for_data {
    font-size: 41.86px;
    font-family: "try";
    letter-spacing: 12px;
}

.accumulate_data {
    font-size: 103.23px;
    font-family: "try";
    letter-spacing: 17px;
}

.time_content {
    font-size: 54.93px;
    color: #d88b47;
    font-family: "Righteous";
    margin-left: 250px;
    letter-spacing: 12px;
}

.font_jump {
    position: absolute;
    left: 1665px;
    top: 635px;
    font-size: 101.52px;
    color: #ffffff;
}

.font_cycle {
    position: absolute;
    left: 105px;
    top: 640px;
    width: 93px;
    height: 78px;
    background-image: url(../data/ico/homecycleback.png);
    display: flex;
    justify-content: center;
    align-items: center;
}</style>