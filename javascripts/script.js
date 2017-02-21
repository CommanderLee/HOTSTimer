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
        switch(map) {
            case "towers-of-doom":
                name = "Towers of Doom 末日塔";
                counterInit = 125;
                rangeInit = 15;
                counterNext = 125;
                rangeNext = 15;
                countdown_time.innerText = "2 : 5";
                mapInfoInit();
                break;
            case "infernal-shrines":
                name = "Infernal Shrines 炼狱圣坛";

                break;
            case "battlefield-of-eternity":
                name = "Battlefield of Eternity 永恒战场";

                break;
            case "tomb-of-the-spider-queen":
                name = "Tomb of the Spider Queen 蛛后墓";

                break;
            case "sky-temple":
                name = "Sky Temple 天空殿";

                break;
            case "garden-of-terror":
                name = "Garden of Terror 恐魔园";

                break;
            case "blackhearts-bay":
                name = "Blackheart's Bay 黑心湾";

                break;
            case "dragon-shire":
                name = "Dragon Shire 巨龙镇";

                break;
            case "haunted-mines":
                name = "Haunted Mines 鬼灵矿";

                break;
            case "cursed-hollow":
                name = "Cursed Hollow 诅咒谷";

                break;
            case "braxis-holdout":
                name = "Braxis Holdout 布莱克西斯禁区";

                break;
            case "warheld-junction":
                name = "Warheld Junction 弹头枢纽站";

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
}

function runCounter() {
    countdown_time.innerText = Math.floor(currTime / 60) + " : " + currTime % 60 + "  ±" + currRange;
    currTime -= 1;
    if (currTime > 0) {
        setTimeout(runCounter, 1000);
    }
    else if (currTime == 0) {
        countdown_time.innerText = "条件：所有祭坛均被开启完毕";
        currTime = counterNext;
        currRange = rangeNext;
        counterStatus = 0;
        $('#btn_timer').html("继续计时");
    }
}

function timerClick() {
    if (counterStatus == 0) {
        counterStatus = 1;
        runCounter();
    }
}
