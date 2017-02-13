/**
 * Created by MercedesLo on 2017-02-13.
 */

"use strict";

let startNow = document.getElementById("button_correct");
let tButton = document.getElementById("button_correct");
let fButton = document.getElementById("button_wrong");

function calculate(){
  console.log("calculating"); //debug
  let x = document.getElementById("task_x").innerHTML;
  let y = document.getElementById("task_y").innerHTML;
  let operant = document.getElementById("task_op").innerHTML;
  let result = document.getElementById("task_res").innerHTML;
  console.log(x,y,operant,result); //debug

  switch(operant){
    case '+' :
      console.log("+")
      if (parseInt(x) + parseInt(y) == parseInt(result)) {
        selectYes();
      } else {
        selectNo();
      }
      break;
    case '–':
      console.log("–")

      if (parseInt(x) - parseInt(y) == parseInt(result)) {
        selectYes();
      } else {
        selectNo();
      }
      break;
    case '×':
      console.log("×")

      if (parseInt(x) * parseInt(y) == parseInt(result)) {
        selectYes();
      } else {
        selectNo();
      }
      break;
    case '/':
      console.log("/")

      if (parseInt(x) / parseInt(y) == parseInt(result)) {
        selectYes();
      } else {
        selectNo();
      }
      break;
  }
}

function selectYes() {
  console.log("click yes"); //debug
  setTimeout(() => {
    tButton.click();
    calculate();
  }, 500);
}

function selectNo() {
  console.log("click no"); //debug
  setTimeout(() => {
    fButton.click();
    calculate();
  }, 500);

}

function startGame(){
  startNow.click();
  calculate();
}

startGame();