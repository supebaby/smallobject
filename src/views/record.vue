<template>
    <div class="record">
        <div class="content">
            <div class="record_list">
                <list data="23" imageUrl="沙滩"></list>
                <list data="22" imageUrl="鲸鱼"></list>
                <list data="21" imageUrl="高楼"></list>
            </div>
            <div class="record_list" style="margin-top: 20px; height: 421px; overflow: hidden;">
                <list data="20" imageUrl="汽车"></list>
                <list data="19" imageUrl="树皮"></list>
                <list data="18" imageUrl="书房"></list>
            </div>
        </div>
        <div class="scrollbar_box">
            <div class="scrollbar"></div>
            <div class="scrollbar_number">
                <div class="number">23</div>
                <div class="number">22</div>
                <div class="number">21</div>
                <div class="number">20</div>
                <div class="number">19</div>
                <div class="number">18</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import list from "../components/recordList.vue"
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.content {
    width: 1785px;
    /* height: 908px; */
}

.record {
    display: flex;
}

.record_list {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    width: 1625px;
    height: 440px;
}

.scrollbar_box {
    height: 810px;
    width: 25px;
    margin-left: 80px;
    background-color: white;
    margin-top: 30px;
    border-radius: 25px;
    position: relative;
}

.scrollbar {
    width: 25px;
    height: 335px;
    margin-top: 55px;
    border-radius: 25px;
    background-color: #d88b47;
}
.scrollbar_number{
    position: absolute;
    width: 25px;
    height: 335px;
    top: 65px;
    left: -55px;
    font-size: 30.21px;
    font-family: "try";
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: transparent;
}
.number{
    margin-bottom: 22px;
}
</style>
