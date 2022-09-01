let counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1
    }
}, 2000);


let counterTwo = 1;
setInterval(function(){
    document.getElementById("radio" + counterTwo).checked = true;
    counterTwo++;
    if (counterTwo > 4) {
        counterTwo = 1
    }
}, 2000);

