let  preveiwBtnEl = document.getElementById("preview-btn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let widthInEl = document.getElementById("wIn");
let heightInEl = document.getElementById("hIn");
let rgbStringOutEl =  document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
widthInEl.addEventListener("input",changeSize);
heightInEl.addEventListener("input",changeSize);
redInEl.addEventListener("input", rgbpreview);
greenInEl.addEventListener("input", rgbpreview);
blueInEl.addEventListener("input", rgbpreview);

function changeSize(){
let wValue = +document.getElementById("wIn").value;
let hValue = +document.getElementById("hIn").value;
if (wValue < 50){
    wValue = 50;
widthInEl.value = 50;
}
else if (wValue > 400){
   wValue = 400;
   widthInEl.value = 400;
}
if (hValue < 50){
    hValue = 50;
heightInEl.value = 50;
}
else if (hValue > 200){
   hValue = 200;
   heightInEl.value = 200;
}
let widthString = wValue + "px";
displayEl.style.width = widthString;
let heightString = hValue + "px";
displayEl.style.height = heightString;


}






function rgbpreview () {

let rValue = +document.getElementById("redIn").value;
let gValue = +document.getElementById("greenIn").value;
let bValue = +document.getElementById("blueIn").value;


if (rValue < 0){
    rValue = 0;
redInEl.value = 0;
}
else if (rValue > 255){
   rValue = 255;
   redInEl.value = 255;

}
if (gValue < 0){
    gValue = 0;
greenInEl.value = 0;
}
else if (gValue > 255){
   gValue = 255;
   greenInEl.value = 255;

}
if (bValue < 0){
    bValue = 0;
blueInEl.value = 0;
}
else if (bValue > 255){
   bValue = 255;
   blueInEl.value = 255;

}




let rgbString = "rgb(" + rValue + ", " + gValue +", " + bValue + ")";

rgbStringOutEl.innerHTML = rgbString;
displayEl.style.background = rgbString;





}
