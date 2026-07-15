const display = document.getElementById("display");

const historyList = document.getElementById("historyList");

function appendValue(value){

display.value += value;

}

function clearDisplay(){

display.value="";

}

function calculate(){

    try{

        const expression = display.value;

        const answer = eval(expression);

        display.value = answer;

        display.classList.add("pop");

        setTimeout(()=>{

            display.classList.remove("pop");

        },300);

        const item = document.createElement("p");

        item.textContent = `${expression} = ${answer}`;

        if(historyList.firstElementChild &&
           historyList.firstElementChild.textContent==="No calculations yet."){

            historyList.innerHTML="";

        }

        historyList.prepend(item);

    }

    catch{

        display.value="Error";

        display.classList.add("shake");

        setTimeout(()=>{

            display.classList.remove("shake");

        },300);

    }

}

function percentage(){
    display.value = "(" + display.value + ")/100";

}

function squareRoot(){
    display.value = "Math.sqrt(" + display.value + ")";
}

function power(){
    display.value = "(" + display.value + ")**2";
}

/*======================================
        CURSOR SPARKLES
======================================*/

/*======================================
        MAGICAL CURSOR TRAIL
======================================*/

const sparkleSymbols = [
    "✦",
    "✧",
    "✨",
    "★",
    "☆",
    "♡",
    "❀",
    "❁"
];

let sparkleTimer = 0;

document.addEventListener("mousemove", function(e){

    if(Date.now() - sparkleTimer < 40) return;

    sparkleTimer = Date.now();

    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";

    sparkle.innerHTML = sparkleSymbols[
        Math.floor(Math.random() * sparkleSymbols.length)
    ];

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    sparkle.style.fontSize =
        (18 + Math.random() * 16) + "px";

    sparkle.style.transform =
        `rotate(${Math.random()*360}deg)`;

    document.body.appendChild(sparkle);

    setTimeout(function(){

        sparkle.remove();

    },1000);

});
