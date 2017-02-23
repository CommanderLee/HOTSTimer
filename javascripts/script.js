$(document).ready(function()
{
    counterStatus = 0;
    document.getElementById("map_detail").style.display = "none";

    $('#title').click(function(e)
    {
        // Hide maps detail
        document.getElementById("map_detail").style.display = "none";
        // Show maps list
        document.getElementById("maps_list").style.display = "block";
        subtitle.innerText = "Maps";
        // Disable the counter
        currTime = -1;
    });

    $('ul.ul_maps li').click(function(e)
    {
        map = e.target.id;
        name = "Default";
        // Hide maps list
        document.getElementById("maps_list").style.display = "none";
        // Show maps detail
        document.getElementById("map_detail").style.display = "block";
        document.getElementById("btn_special").style.display = "none";
        flagCursed = 0;
        switch(map) {
            case "towers-of-doom":
                name = "Towers of Doom 末日塔";
                condition = "条件：所有祭坛均被开启完毕";
                $('#description').html("注释：可能的祭坛配置：a左上和右上，b中间，c下方，d中间和下方，e左上、右上和中间，f左上、右上和下方。第一次和第五次机制总是e或f的配置，其他时候总是在abcd的配置中选。前六次机制会让6种配置(abcdef)全部出现，之后的第七八九十次机制会让abcd的配置全部出现(因为配置ef不再出现了)。十次机制之后就是随机出现abcd的配置，这时候配置才有重复的可能,所以我们绝对可以预测第五，六次还有第十次的配置");
                counterInit = 125;
                rangeInit = 15;
                counterNext = 125;
                rangeNext = 15;
                countdown_time.innerText = "2 : 5";
                mapInfoInit();
                break;
            case "infernal-shrines":
                name = "Infernal Shrines 炼狱圣坛";
                condition = "条件：惩罚者阵亡";
                $('#description').html("注释：第一波野怪刷新是在2分整，首次打野最合适的时间是防守或跟推惩罚者之后。之后的每次打野可以选着在圣坛刷新之前几十秒或惩罚者处理完毕之后。");
                counterInit = 115;
                rangeInit = 0;
                counterNext = 115;
                rangeNext = 0;
                countdown_time.innerText = "1 : 55";
                mapInfoInit();
                break;
            case "battlefield-of-eternity":
                name = "Battlefield of Eternity 永恒战场";
                condition = "条件：不朽者阵亡";
                $('#description').html("注释：无");
                counterInit = 105;
                rangeInit = 0;
                counterNext = 105;
                rangeNext = 0;
                countdown_time.innerText = "1 : 45";
                mapInfoInit();
                break;
            case "tomb-of-the-spider-queen":
                name = "Tomb of the Spider Queen 蛛后墓";
                condition = "条件：所有蛛后阵亡";
                $('#description').html("注释：无");
                counterInit = 180;
                rangeInit = 0;
                counterNext = 15;
                rangeNext = 0;
                countdown_time.innerText = "3 : 0";
                mapInfoInit();
                break;
            case "sky-temple":
                name = "Sky Temple 天空殿";
                condition = "条件：所有圣殿发射完毕";
                $('#description').html("注释：1.上+中; 2.下; 3.下+(上或中)");
                counterInit = 90;
                rangeInit = 0;
                counterNext = 120;
                rangeNext = 0;
                countdown_time.innerText = "1 : 30";
                mapInfoInit();
                break;
            case "garden-of-terror":
                name = "Garden of Terror 恐魔园";
                condition = "条件：所有种子兵和大种子花消失";
                $('#description').html("注释：刷新间隔和玩家控制的花的持续时间无关");
                counterInit = 90;
                rangeInit = 0;
                counterNext = 200;
                rangeNext = 0;
                countdown_time.innerText = "1 : 30";
                mapInfoInit();
                break;
            case "blackhearts-bay":
                name = "Blackheart's Bay 黑心湾";
                condition = "条件：两个箱子都被破";
                $('#description').html("注释：无");
                counterInit = 50;
                rangeInit = 0;
                counterNext = 175;
                rangeNext = 25;
                countdown_time.innerText = "0 : 50";
                mapInfoInit();
                break;
            case "dragon-shire":
                name = "Dragon Shire 巨龙镇";
                condition = "条件：消灭龙";
                $('#description').html("注释：无");
                counterInit = 75;
                rangeInit = 0;
                counterNext = 120;
                rangeNext = 0;
                countdown_time.innerText = "1 : 15";
                mapInfoInit();
                break;
            case "haunted-mines":
                name = "Haunted Mines 鬼灵矿";
                condition = "条件: 两只傀儡阵亡";
                $('#description').html("注释：无");
                counterInit = 120;
                rangeInit = 0;
                counterNext = 120;
                rangeNext = 0;
                countdown_time.innerText = "2 : 00";
                mapInfoInit();
                break;
            case "cursed-hollow":
                name = "Cursed Hollow 诅咒谷";
                condition = "条件: 拿到贡品/诅咒结束";
                $('#description').html("注释: 第一次贡品肯定在中列(上下随机)；第一个贡品之前打胖子；第一个贡品之后打F4");
                counterInit = 180;
                rangeInit = 0;
                counterNext = 75;
                rangeNext = 0;
                countdown_time.innerText = "3 : 0";

                // Special case
                counterNext2 = 125;
                rangeNext2 = 0;
                document.getElementById("btn_special").style.display = "block";
                flagCursed = 1;

                mapInfoInit();
                break;
            case "braxis-holdout":
                name = "Braxis Holdout 布莱克西斯禁区";
                condition = "条件: 所有虫群阵亡";
                $('#description').html("注释：无");
                counterInit = 120;
                rangeInit = 0;
                counterNext = 115;
                rangeNext = 0;
                countdown_time.innerText = "2 : 00";
                mapInfoInit();
                break;
            case "warheld-junction":
                name = "Warheld Junction 弹头枢纽站";
                condition = "条件: 所有弹头被收集";
                $('#description').html("注释：固定以第奇数次总计2颗，第偶数次总计4颗的规律循环；在争夺核弹的同时要尽力把兵线压过去以获得视野；核弹应尽量投放到上下路，因为地图上的BOSS打完后会沿着上下路推进");
                counterInit = 120;
                rangeInit = 0;
                counterNext = 175;
                rangeNext = 0;
                countdown_time.innerText = "2 : 00";
                mapInfoInit();
                break;
        }
        subtitle.innerText = name;


    });
});

function mapInfoInit() {
    currTime = counterInit;
    currRange = rangeInit;
    counterStatus = 0;
    $('#btn_timer').html("开始计时");
    document.getElementById('btn_special').style.visibility = "hidden";
}

function runCounter() {
    countdown_time.innerText = Math.floor(currTime / 60) + " : " + currTime % 60 + "  ±" + currRange;
    currTime -= 1;
    if (currTime > 0) {
        setTimeout(runCounter, 1000);
    }
    else if (currTime == 0) {
        countdown_time.innerText = condition;
        currTime = counterNext;
        currRange = rangeNext;
        counterStatus = 0;
        $('#btn_timer').html("继续计时");
        // Special case: Cursed Hollow
        if (flagCursed == 1) {

            $('#btn_timer').html("拿到贡品，继续计时");
            $('#btn_special').html("诅咒结束，继续计时");
            document.getElementById('btn_special').style.visibility = "visible";
        }
    }
}

function timerClick() {
    if (counterStatus == 0) {
        counterStatus = 1;
        $('#btn_timer').html("正在计时...");
        runCounter();
    }
}

function timerSpecialClick() {
    if (flagCursed == 1 && counterStatus == 0) {
        counterStatus = 1;

        // Change the default setting
        currTime = counterNext2;
        currRange = rangeNext2;
        $('#btn_timer').html("正在计时...");
        document.getElementById('btn_special').style.visibility = "hidden";

        runCounter();
    }
}
