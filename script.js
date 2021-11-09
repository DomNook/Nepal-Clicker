var cash = 0;

document.getElementById("money").innerHTML = cash;



//button for cash
function earncash(amount) {
    cash = cash + amount;
    document.getElementById("money").innerHTML = cash;
}


//hardware upgrade
var clickpower = 1;
var hardupgradecost = 50

document.getElementById("clickindicator").innerHTML = clickpower;
document.getElementById("hardcost").innerHTML = hardupgradecost;

function upgradehard() {
    if (cash >= hardupgradecost) {
        cash = cash - hardupgradecost;
        clickpower += 1;
        hardupgradecost = Math.round(hardupgradecost * 1.75);

        document.getElementById("money").innerHTML = cash;
        document.getElementById("hardcost").innerHTML = hardupgradecost;
        document.getElementById("clickindicator").innerHTML = clickpower;
    }
}




//wifi antennas
var wificost = 15;
var wifi = 0;

document.getElementById("wifi").innerHTML = wifi;
document.getElementById("wificost").innerHTML = wificost;

function buyWifi() {
    if (cash >= wificost) {
        cash = cash - wificost;
        wifi += 1;
        wificost = Math.round(wificost * 1.15);

        document.getElementById("wifi").innerHTML = wifi;
        document.getElementById("money").innerHTML = cash;
        document.getElementById("wificost").innerHTML = wificost;
        cashpersec();
    }
}

//trading websites
var tradecost = 100
var trade = 0

document.getElementById("trade").innerHTML = trade;
document.getElementById("tradecost").innerHTML = tradecost;

function buyTrade () {
    if (cash >= tradecost) {
        cash = cash - tradecost;
        trade += 1;
        tradecost = Math.round(tradecost * 1.15);

        document.getElementById("trade").innerHTML = trade;
        document.getElementById("money").innerHTML = cash;
        document.getElementById("tradecost").innerHTML = tradecost;
        cashpersec();
    }
}

//Laptops for children
var laptopcost = 500
var laptop = 0

document.getElementById("laptop").innerHTML = laptop;
document.getElementById("laptopcost").innerHTML = laptopcost;

function buyLaptop() {
    if (cash >= laptopcost) {
        cash = cash - laptopcost;
        laptop += 1;
        laptopcost = Math.round(laptopcost * 1.15);

        document.getElementById("laptop").innerHTML = laptop;
        document.getElementById("money").innerHTML = cash;
        document.getElementById("laptopcost").innerHTML = laptopcost;
        cashpersec();
    }
}

//Telemedicine
var telemedcost = 2500
var telemed = 0

document.getElementById("telemed").innerHTML = telemed;
document.getElementById("telemedcost").innerHTML = telemedcost;

function buyTelemed() {
    if (cash >= telemedcost) {
        cash = cash - telemedcost;
        telemed += 1;
        telemedcost = Math.round(telemedcost * 1.15);

        document.getElementById("telemed").innerHTML = telemed;
        document.getElementById("money").innerHTML = cash;
        document.getElementById("telemedcost").innerHTML = telemedcost;
        cashpersec();
    }
}

//Environmental surveillance
var envsurcost = 10000
var envsur = 0

document.getElementById("envsur").innerHTML = envsur;
document.getElementById("envsurcost").innerHTML = envsurcost;

function buyEnvsur() {
    if (cash >= envsurcost) {
        cash = cash - envsurcost;
        envsur += 1;
        envsurcost = Math.round(envsurcost * 1.15);

        document.getElementById("envsur").innerHTML = envsur;
        document.getElementById("money").innerHTML = cash;
        document.getElementById("envsurcost").innerHTML = envsurcost;
        cashpersec();
    }
}

//Oystein
var bigmancost = 100000
var bigman = 0

document.getElementById("bigman").innerHTML = bigman;
document.getElementById("bigmancost").innerHTML = bigmancost;

function buyBigman() {
    if (cash >= bigmancost) {
        if (bigman == 9) {
            cash = cash - bigmancost;
            bigman += 1;
            bigmancost = Math.round(bigmancost * 1.15);
    
            document.getElementById("bigman").innerHTML = bigman;
            document.getElementById("money").innerHTML = cash;
            document.getElementById("bigmancost").innerHTML = bigmancost;
            
            cashpersec();

            Victory();
        }
        else {
            cash = cash - bigmancost;
            bigman += 1;
            bigmancost = Math.round(bigmancost * 1.15);
    
            document.getElementById("bigman").innerHTML = bigman;
            document.getElementById("money").innerHTML = cash;
            document.getElementById("bigmancost").innerHTML = bigmancost;
            cashpersec();
        }

    }
}


// cash per second calculations


setInterval(function() {
    cash = cash + wifi + (trade * 2) + (laptop * 5) + (telemed * 12) + (envsur * 35) + (bigman * 100);
    document.getElementById("money").innerHTML = cash;
    document.title = cash + " Money | Nepal Clicker"
}, 1000); // 1000 = 1 sec

// autosave
setInterval(function() {
    SaveGame()
}, 30000); // 30000 = 30 sec

//display cps

var cashpersecond = 0;
document.getElementById("cashpsec").innerHTML = cashpersecond;

function cashpersec() {
    cashpersecond = wifi + (trade * 2) + (laptop * 5) + (telemed * 12) + (envsur * 35) + (bigman * 100);
    document.getElementById("cashpsec").innerHTML = cashpersecond;
}

//victory screen

function Victory() {
    var freeplaypopup = document.getElementById("win");
    freeplaypopup.classList.toggle("show");
    new Audio("./Nepal.mp3").play()
}

function FreePlay() {
    var freeplaypopup = document.getElementById("win");
    freeplaypopup.classList.toggle("show");
}

//saving

function SaveGame() {
    var GameSave = {
        cash: cash,
        clickpower: clickpower,
        hardupgradecost: hardupgradecost,
        wifi: wifi,
        wificost: wificost,
        trade: trade,
        tradecost: tradecost,
        laptop: laptop,
        laptopcost: laptopcost,
        telemed: telemed,
        telemedcost: telemedcost,
        envsur: envsur,
        envsurcost: envsurcost,
        bigman: bigman,
        bigmancost: bigmancost
    };
    localStorage.setItem("GameSave", JSON.stringify(GameSave));
}

//loading

function LoadGame() {
    var SavedGame= JSON.parse(localStorage.getItem("GameSave"));
    if (typeof SavedGame.cash !== "undefined") cash = SavedGame.cash;
    if (typeof SavedGame.clickpower !== "undefined") clickpower = SavedGame.clickpower;
    if (typeof SavedGame.hardupgradecost !== "undefined") hardupgradecost = SavedGame.hardupgradecost;
    if (typeof SavedGame.wifi !== "undefined") wifi = SavedGame.wifi;
    if (typeof SavedGame.wificost !== "undefined") wificost = SavedGame.wificost;
    if (typeof SavedGame.trade !== "undefined") trade = SavedGame.trade;
    if (typeof SavedGame.tradecost !== "undefined") tradecost = SavedGame.tradecost;
    if (typeof SavedGame.laptop !== "undefined") laptop = SavedGame.laptop;
    if (typeof SavedGame.laptopcost !== "undefined") laptopcost = SavedGame.laptopcost;
    if (typeof SavedGame.telemed !== "undefined") telemed = SavedGame.telemed;
    if (typeof SavedGame.telemedcost !== "undefined") telemedcost = SavedGame.telemedcost;
    if (typeof SavedGame.envsur !== "undefined") envsur = SavedGame.envsur;
    if (typeof SavedGame.envsurcost !== "undefined") envsurcost = SavedGame.envsurcost;
    if (typeof SavedGame.bigman !== "undefined") bigman = SavedGame.bigman;
    if (typeof SavedGame.bigmancost !== "undefined") bigmancost = SavedGame.bigmancost;

    cashpersec()
    document.getElementById("hardcost").innerHTML = hardupgradecost;
    document.getElementById("clickindicator").innerHTML = clickpower;
    document.getElementById("wifi").innerHTML = wifi;
    document.getElementById("wificost").innerHTML = wificost;
    document.getElementById("trade").innerHTML = trade;
    document.getElementById("tradecost").innerHTML = tradecost;
    document.getElementById("laptop").innerHTML = laptop;
    document.getElementById("laptopcost").innerHTML = laptopcost;
    document.getElementById("telemed").innerHTML = telemed;
    document.getElementById("telemedcost").innerHTML = telemedcost;
    document.getElementById("envsur").innerHTML = envsur;
    document.getElementById("envsurcost").innerHTML = envsurcost;
    document.getElementById("bigman").innerHTML = bigman;
    document.getElementById("bigmancost").innerHTML = bigmancost;
}

// reset game

function ResetGame() {
    if (confirm("Are you sure you want to reset your game? This will delete all your progress")) {
        var GameSave = {};
        localStorage.setItem("GameSave", JSON.stringify(GameSave))
        location.reload();
    }
}

// autoload on start

window.onload = LoadGame();