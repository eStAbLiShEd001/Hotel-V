let counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1
    }
}, 2000);

const writeMessage = function message() {
    const say = alert('WELCOME TO VILLAMAR😊, PLEASE DO WELL TO ENJOY YOUR STAY');
    return say;
}
const total = writeMessage()
