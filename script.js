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

