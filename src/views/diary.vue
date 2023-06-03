<template>
    <div>
        <div class="diary_box">
            <div class="diary_box_top">
                <div class="top_date">For 06/23</div>
                <div class="top_font">
                    <div class="top_font_forhelp"><img src="../data/ico/问号.png" alt="help"></div>
                    <div class="top_font_cancel"><img src="../data/ico/关闭.png" alt="cancel" width="25px" height="25px">
                    </div>
                </div>
            </div>
            <div class="fordiary">
                <div class="icon_for_diary">
                    <div class="icon_diary"><img src="../data/ico/字体大小.png" alt="fontCase" width="60px" height="60px"></div>
                    <div class="icon_diary"><img src="../data/ico/减少缩进.png" alt="Reduce_indentation" width="60px"
                            height="60px"></div>
                    <div class="icon_diary"><img src="../data/ico/下划线.png" alt="underline" width="60px" height="60px"></div>
                    <div class="icon_diary"><img src="../data/ico/前移一层.png" alt="forward" width="60px" height="60px"></div>
                    <div class="icon_diary"><img src="../data/ico/标题.png" alt="title" width="60px" height="60px"></div>
                    <div class="icon_diary"><img src="../data/ico/下标.png" alt="down_icon" width="60px" height="60px"></div>
                </div>
                <div class="journal_editing_area">
                    <textarea class="editing_area">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;风从水上走过，留下了粼粼波纹;阳光从云中穿过，留下了缕缕温暖;骆驼从沙漠走过，留下了深深蹄印;哨鸽从天空飞过，留下了声声欢韵;岁月从树林中走过，留下了圈圈年轮……啊，朋友，我们从时代的舞台走过，留下了什么呢?</textarea>
                </div>
                <div class="journal_editing_area1"></div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style setup>
.diary_box {
    width: 1673px;
    height: 840px;
    background-image: url(../data/back/diary_area.png);
    margin: 40px auto;
    border-radius: 20px;
}

.diary_box_top {
    height: 70px;
    width: 1673px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top_date {
    width: 270px;
    height: 70px;
    line-height: 70px;
    font-size: 41.86px;
    padding-left: 40px;
    letter-spacing: 7px;
    font-family: "try";
}

.top_font {
    width: 430px;
    height: 45px;
    border-radius: 45px;
    background: #f6f6f6;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top_font_forhelp {
    width: 120px;
    height: 35px;
    border-radius: 35px;
    background: #000000;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top_font_cancel {
    width: 120px;
    height: 35px;
    border-radius: 35px;
    background: #981515;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fordiary {
    width: 1635px;
    height: 743px;
    background-size: cover;
    border-radius: 20px;
    margin: 0 auto;
    position: relative;
}

.icon_for_diary {
    width: 1635px;
    height: 110px;
    background: white;
    border-radius: 20px 10px;
    display: flex;
    align-items: center;
    position: absolute;
}

.icon_diary {
    width: 60px;
    height: 60px;
    margin-left: 30px;
}

.journal_editing_area {
    margin-top: 0px;
    width: 1635px;
    height: 744px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../data/back/diary_area_background.png);
}

.journal_editing_area1 {
    position: absolute;
    top: 110px;
    left: 0px;
    width: 909px;
    height: 633px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../data/back/diary_area_back.png);
    /* background-color: chartreuse; */
}

.editing_area {
    width: 1540px;
    height: 560px;
    /* resize:none; */
    margin-top: 140px;
    z-index: 1;
    background: none;
    outline: none;
    border: none;
    font-size: 30.69px;
    font-family: "light";
}
</style>