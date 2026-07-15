const display = document.getElementById("display");

function appendValue(value){

display.value += value;

}

function clearDisplay(){

display.value="";

}

function calculate(){

try{

display.value = eval(display.value);

display.classList.add("success");

setTimeout(()=>{

display.classList.remove("success");

},400);

}

catch{

display.value="Error";

display.classList.add("shake");

setTimeout(()=>{

display.classList.remove("shake");

},400);

}

}

function percentage(){

display.value = eval(display.value)/100;

}

function squareRoot(){

display.value = Math.sqrt(eval(display.value));

}

function power(){

display.value = Math.pow(eval(display.value),2);

}
