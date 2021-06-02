//starting credits
let credits = 1000;
//starting bet size
let bet = 25;
//initial multiplier
let multi = 1;
//possible symbols
const reel = ["7", "77", "777", "J", "A", "K", "Q", "🍒", "-"]
//pay scale for winning symbols
const payout = {
    "🍒 🍒 🍒":	12500,
    "777 777 777" :	6250,
    "77 77 77": 2500,
    "🍒 🍒" :	625,
    "7 7 7" :	250,
    "A A A" : 125,
    "K K K" : 50,
    "Q Q Q" :	25,
    "J J J" :	10,
    "🍒" : 25,
    "🍒🍒" : 50,
    "🍒🍒🍒" : 75,
    "🍒🍒🍒🍒" : 100,
    "🍒🍒🍒🍒🍒" : 125,
    "🍒🍒🍒🍒🍒🍒" : 150,
    "- - -": 0
}
//this spins the reels
function spinReels(){
    //checks for available funds 
    if(credits < bet){
        return (console.log("Insufficient Funds"));
    };
    //deducts bet amount
    credits = credits - bet;
    //shows new credit balance
    document.getElementById('credits').innerText = credits;
    //resets payout display
    document.getElementById('pay').innerText = 0;
    //randomly generates a new symbol on the reels
    document.getElementById('top-reel-1').innerHTML = `<p>${getRandomSymbol()}</p>`;
    document.getElementById('top-reel-2').innerHTML = `<p>${getRandomSymbol()}</p>`;
    document.getElementById('top-reel-3').innerHTML = `<p>${getRandomSymbol()}</p>`;
    document.getElementById('center-reel-1').innerHTML = `<p>${getRandomSymbol()}</p>`;
    document.getElementById('center-reel-2').innerHTML = `<p>${getRandomSymbol()}</p>`;
    document.getElementById('center-reel-3').innerHTML = `<p>${getRandomSymbol()}</p>`;
    document.getElementById('bottom-reel-1').innerHTML = `<p>${getRandomSymbol()}</p>`;
    document.getElementById('bottom-reel-2').innerHTML = `<p>${getRandomSymbol()}</p>`;
    document.getElementById('bottom-reel-3').innerHTML = `<p>${getRandomSymbol()}</p>`; 
    //pays winning lines
    checkPayLines();
}
//randomly selects pay symbols
function getRandomSymbol(){
    return reel[Math.floor(Math.random()*9)]
}
//checks each pay line for 3 of a kinds or cherry's to pay back to the player
function checkPayLines(){
    //checks top line
    if (document.getElementById('top-reel-1').innerText === document.getElementById('top-reel-2').innerText && 
        document.getElementById('top-reel-1').innerText === document.getElementById('top-reel-3').innerText ) {
        console.log("You Win!");
        payWinningsSymbols(document.getElementById('top-reel-1').innerText, document.getElementById('top-reel-2').innerText, document.getElementById('top-reel-3').innerText)
    //checks center line
    } else if(document.getElementById('center-reel-1').innerText === document.getElementById('center-reel-2').innerText && document.getElementById('center-reel-1').innerText === document.getElementById('center-reel-3').innerText) {
        console.log("You Win!");
        payWinningsSymbols(document.getElementById('center-reel-1').innerText, document.getElementById('center-reel-2').innerText, document.getElementById('center-reel-3').innerText)
    //checks bottom line
    } else if(document.getElementById('bottom-reel-1').innerText === document.getElementById('bottom-reel-2').innerText && document.getElementById('bottom-reel-1').innerText === document.getElementById('bottom-reel-3').innerText) {
        console.log("You Win!");
        payWinningsSymbols(document.getElementById('bottom-reel-1').innerText, document.getElementById('bottom-reel-2').innerText, document.getElementById('bottom-reel-3').innerText)
    //checks for cherry's
    } else if (
        document.getElementById('top-reel-1').innerText === "🍒" ||
        document.getElementById('top-reel-2').innerText === "🍒" ||
        document.getElementById('top-reel-3').innerText === "🍒" ||

        document.getElementById('center-reel-1').innerText === "🍒" ||
        document.getElementById('center-reel-2').innerText === "🍒" ||
        document.getElementById('center-reel-3').innerText === "🍒" ||

        document.getElementById('bottom-reel-1').innerText === "🍒" ||
        document.getElementById('bottom-reel-2').innerText === "🍒" ||
        document.getElementById('bottom-reel-3').innerText === "🍒"
        ) {
            console.log("You Win!");
            let cherry = "";
           
                if(document.getElementById('top-reel-1').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }
                if(document.getElementById('top-reel-2').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }
                if(document.getElementById('top-reel-3').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }

                if(document.getElementById('center-reel-1').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }
                if(document.getElementById('center-reel-2').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }
                if(document.getElementById('center-reel-3').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }

                if(document.getElementById('bottom-reel-1').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }
                if(document.getElementById('bottom-reel-2').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }
                if(document.getElementById('bottom-reel-3').innerText === "🍒" ){
                    cherry = cherry + "🍒";
                }     
                console.log(cherry);
                payCherry(cherry);
    } else {
        console.log("You Lose!");
    }
}
//pays for 3 of a kind wins
function payWinningsSymbols (a, b, c) {
    console.log(`${a} ${b} ${c}`);
    console.log(payout[`${a} ${b} ${c}`] * multi);
    document.getElementById('pay').innerText = payout[`${a} ${b} ${c}`];
    credits = credits + (payout[`${a} ${b} ${c}`] * multi);
    document.getElementById('credits').innerText = credits
}
//pays for cherry's
function payCherry(cherry){
    credits = credits + payout[cherry];
    document.getElementById('credits').innerText = credits
}

//sets bet amount
function changeBetSize(size, times){
    bet = size;
    multi = times;
    console.log(`${bet} ${multi}`);
    document.getElementById('betAmount').innerText = bet;

}