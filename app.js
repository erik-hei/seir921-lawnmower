// Game variables
let game = {
    money: 0,
    day: 0,
    rate: 1,
    mowed: 0,
    tool: 0
}

let tools = [
    {
        type: "Teeth",
        rate: 1,
        price: 0
    }, {
        type: "Rusty Scissors",
        rate: 5,
        price: 5
    }, {
        type: "Push Lawnmower",
        rate: 50,
        price: 25
    }, {
        type: "Battery-Powered Lawnmower",
        rate: 100,
        price: 250
    }, {
        type: "Team of Students",
        rate: 250,
        price: 500
    }
]

// DOM Stuff
// stats
const money = document.getElementById("money");
const tool = document.getElementById("tool");
const rate = document.getElementById("rate");
const mowed = document.getElementById("mowed");
const days = document.getElementById("days");
const nextTool = document.getElementById("next-tool");
const nextPrice = document.getElementById("next-price");
const nextRate = document.getElementById("next-rate");

// buttons
const newDayButton = document.getElementById("new-day");
const buyButton = document.getElementById("buy")

// methods
let handleNewDay = () => {
    // update game variables
    game.money += game.rate;
    game.day += 1;
    game.mowed += game.rate;
    // update stats
    money.innerText = game.money;
    mowed.innerText = game.mowed;
    days.innerText = game.day;
    if (game.money >= 1000 && tools[game.tool].type == "Team of Students") {
        window.alert("You won!")
    }
}

let handleBuy = () => {
    // check money to see if they can afford
    if (game.money < tools[game.tool + 1].price) {
        window.alert("You don't have enough money!")
    } else {
        // update game variables
        game.tool += 1;
        game.money -= tools[game.tool].price;
        game.rate = tools[game.tool].rate;
        // update stats
        money.innerText = game.money;
        tool.innerText = tools[game.tool].type;
        rate.innerText = game.rate;
        if (game.tool < tools.length - 1) {
            nextTool.innerText = tools[game.tool + 1].type;
            nextPrice.innerText = tools[game.tool + 1].price;
            nextRate.innerText = tools[game.tool + 1].rate;
        }
    }
}


// event listeners
newDayButton.addEventListener("click", handleNewDay);
buyButton.addEventListener("click", handleBuy)