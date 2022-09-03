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
    const askUser = prompt('Have you ever visited Villamar before?')
    if (askUser === 'yes' || 'Yes' || 'YES') {
        alert('GOOD TO HAVE YOU HERE. PLEASE ENJOY YOUR STAY')
    } else if(askUser === 'no' || 'No' || 'NO') {
        alert('AWESOME!, WELCOME BACK')
    } else {
        alert('INVALID COMMAND')
    }
}


const total = writeMessage()
