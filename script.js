let counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1
    }
}, 2000);

// const writeMessage = function message() {
//     const say = alert('WELCOME TO VILLAMAR😊, PLEASE DO WELL TO ENJOY YOUR STAY');
//     return say;
// }
// const total = writeMessage()
// let slider = 0;
// showSlide();

// function showSlide() {
//     let i;
//     let slide = document.getElementsByClassName("slider-two");
//     for (i = 0; i < slide.lenth; i++) {
//         slide[i].style.display = "none";
//     }
//     slider++;
//     if (slider > slide.lenth) {
//         slider = 1;
//     }
//     slide[slider - 1].style.display = "block";
//     setTimeout(showSlide, 2000);
// }