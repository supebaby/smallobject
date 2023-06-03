<template>
    <div>
        <div class="square_map">
            <div class="font_one">
                <font back="white" imageUrl="smile"></font>
            </div>
            <div class="font_two">
                <font back="white" imageUrl="person"> </font>
            </div>
            <div class="font_three">
                <font back="#5490e1" imageUrl="personW"></font>
            </div>
            <div class="font_four">
                <font back="white" imageUrl="person"></font>
            </div>
            <div class="font_five">
                <font back="white" imageUrl="cry"></font>
            </div>
            <div class="font_six">
                <font back="#981515" imageUrl="personW"></font>
            </div>
        </div>
    </div>
</template>

<script setup>
import font from "../components/squareFont.vue"
</script>

<style>
.square_map {
    width: 1676px;
    height: 844px;
    margin: 15px auto;
    background-image: url(../data/back/地图.png);
    position: relative;
}

.font_one {
    position: absolute;
    top: 300px;
    left: 170px;
}
.font_two{
    position: absolute;
    top: 570px;
    left: 570px;
}
.font_three{
    position: absolute;
    top: 290px;
    left: 680px;
}
.font_four{
    position: absolute;
    top: 360px;
    left: 790px;
}
.font_five{
    position: absolute;
    top: 30px;
    left: 1090px;
}
.font_six{
    position: absolute;
    top: 490px;
    left: 1270px;
}
</style>