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

function buyLaptop() {
    
}


// cash per second calculations


setInterval(function() {
    cash = cash + wifi + (trade * 2);
    document.getElementById("money").innerHTML = cash;
}, 1000); // 1000 = 1 sec

//display cps

var cashpersec = 0;
document.getElementById("cashpsec").innerHTML = cashpersec;

setInterval(function() {
    cashpersec = wifi + (trade * 2)
    document.getElementById("cashpsec").innerHTML = cashpersec;
}, 1000)