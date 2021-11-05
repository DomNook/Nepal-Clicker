var cash = 0;
document.getElementById("money").innerHTML = cash;
document.getElementById("moneybutton").addEventListener("click", earncash);


//button for cash
function earncash() {
    cash += 1;
    console.log(cash);
    document.getElementById("money").innerHTML = cash;
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
    }
}

//Oystein
var bigmancost = 100000
var bigman = 0

document.getElementById("bigman").innerHTML = bigman;
document.getElementById("bigmancost").innerHTML = bigmancost;

function buyBigman() {
    if (cash >= bigmancost) {
        cash = cash - bigmancost;
        bigman += 1;
        bigmancost = Math.round(bigmancost * 1.15);

        document.getElementById("bigman").innerHTML = bigman;
        document.getElementById("money").innerHTML = cash;
        document.getElementById("bigmancost").innerHTML = bigmancost;
    }
}


// cash per second calculations


setInterval(function() {
    cash = cash + wifi + (trade * 2) + (laptop * 5) + (telemed * 12) + (envsur * 35) + (bigman * 100);
    document.getElementById("money").innerHTML = cash;
}, 1000); // 1000 = 1 sec

//display cps

var cashpersec = 0;
document.getElementById("cashpsec").innerHTML = cashpersec;

setInterval(function() {
    cashpersec = wifi + (trade * 2) + (laptop * 5) + (telemed * 12) + (envsur * 35) + (bigman * 100);
    document.getElementById("cashpsec").innerHTML = cashpersec;
}, 1000); // 1000 = 1 sec