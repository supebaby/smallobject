<template>
    <div class="activity">
        <div class="activityList1">
            <activityList imageUrl="海浪" year="06" mouth="23" aboutContent="六月更新公告" englishContent="Updates"></activityList>
        </div>
        <div class="activityList1">
            <activityList imageUrl="桌子" year="06" mouth="18" aboutContent="六月有奖征稿" englishContent="Awords"></activityList>
        </div>
        <div class="activityList1">
            <activityList></activityList>
        </div>
        <div class="scrollbar_box">
                <div class="scrollbar"></div>
            </div>
    </div>
</template>

<script setup>
import activityList from "../components/activityList.vue"
</script>

<style>
.activityList1 {
    margin: 40px 60px;
    width: 1376px;
    height: 353px;
}
.activity{
    width: 1920px;
    height: 908px;
    overflow: hidden;
    position: relative;
}
.scrollbar_box{
    height: 810px;
    width: 25px;
    position: absolute;
    top: 30px;
    right: 40px;
    background-color: white;
    border-radius: 25px;
}
.scrollbar {
    width: 25px;
    height: 335px;
    margin-top: 375px;
    border-radius: 25px;
    background-color: #d88b47;
}
</style>