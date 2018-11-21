window.onload="random", "addScore";

var wins=0
var loses=0

  function random(){
    document.getElementById("randomNum").innerHTML = Math.floor(Math.random() * 99)+10;
    

  };
  //addScore starts at 0, btns add value to addScore
  function addScore() {
    document.getElementById("yourScore").innerHTML=("your Score"+i);
    document.getElementById("btn1").innerHTML=(i+5);
    document.getElementById("btn2").innerHTML=(i+1);
    document.getElementById("btn3").innerHTML=(i+3);
    document.getElementById("btn4").innerHTML=(i+10);
};

//when current score>or=randomNumber reset
//if score=randomNumber add to wins
//else score>randomNumber add to loses
document.dispatchEvent = function(evt) {
  var evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var keypressed = String.fromCharCode(charCode);
  randomNum=currentScore+1};
  document.getElementById("loses").innerHTML = "loses="+loses;
  if (word.includes(keypressed)){
      guessed.push(keypressed)
      currentWord =getElementById(randomNum)
      document.getElementById("loses").innerHTML;
  };
      
   
  
  






