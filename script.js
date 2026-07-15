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

/*======================================
        DIAMETER CALCULATORS
======================================*/

// Diameter from Radius
function diameterFromRadius(){

    const radius = parseFloat(document.getElementById("radiusInput").value);

    if(isNaN(radius)){
        document.getElementById("radiusResult").innerHTML = "Please enter a valid radius.";
        return;
    }

    const diameter = radius * 2;

    document.getElementById("radiusResult").innerHTML =
        "Diameter = <strong>" + diameter.toFixed(2) + "</strong>";

}


// Diameter from Circumference
function diameterFromCircumference(){

    const circumference = parseFloat(document.getElementById("circumferenceInput").value);

    if(isNaN(circumference)){
        document.getElementById("circumferenceResult").innerHTML = "Please enter a valid circumference.";
        return;
    }

    const diameter = circumference / Math.PI;

    document.getElementById("circumferenceResult").innerHTML =
        "Diameter = <strong>" + diameter.toFixed(2) + "</strong>";

}


// Radius from Diameter
function radiusFromDiameter(){

    const diameter = parseFloat(document.getElementById("diameterInput").value);

    if(isNaN(diameter)){
        document.getElementById("diameterResult").innerHTML = "Please enter a valid diameter.";
        return;
    }

    const radius = diameter / 2;

    document.getElementById("diameterResult").innerHTML =
        "Radius = <strong>" + radius.toFixed(2) + "</strong>";

}


// Circumference from Diameter
function circumferenceFromDiameter(){

    const diameter = parseFloat(document.getElementById("diameterCircInput").value);

    if(isNaN(diameter)){
        document.getElementById("circumferenceDiameterResult").innerHTML = "Please enter a valid diameter.";
        return;
    }

    const circumference = Math.PI * diameter;

    document.getElementById("circumferenceDiameterResult").innerHTML =
        "Circumference = <strong>" + circumference.toFixed(2) + "</strong>";

}
/*======================================
        MOBILE NAVIGATION
======================================*/

function toggleMenu(){

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("show");

}

const navLinks = document.querySelectorAll("#navLinks a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks").classList.remove("show");

    });

});
