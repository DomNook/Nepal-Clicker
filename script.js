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
}

function FreePlay() {
    var freeplaypopup = document.getElementById("win");
    freeplaypopup.classList.toggle("show");
}