//Defining OnStart values
var DiceNumber = 4;

//Function for Generating dice number
function NumGen() {
  document.getElementById("DisplayDumber").innerHTML = Math.floor(Math.random() * DiceNumber) + 1;
   }

/*
Dice button Functions
*/

//Main Dice
function Dice(){
  setTimeout(() => { document.getElementById("Dice").classList.remove('animate__wobble'); NumGen(); }, 2000);
  document.getElementById('Dice').classList.add('animate__wobble');
}

//D4
function D4(){
  DiceNumber = 4;
  setTimeout(() => { document.getElementById("D4").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D4').classList.add('animate__tada');
  document.getElementById("DisplayDice").innerHTML = "D4";
}
//D6
function D6(){
  DiceNumber = 6;
  setTimeout(() => { document.getElementById("D6").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D6').classList.add('animate__tada');
  document.getElementById("DisplayDice").innerHTML = "D6";
}
//D8
function D8(){
  DiceNumber = 8;
  setTimeout(() => { document.getElementById("D8").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D8').classList.add('animate__tada');
  document.getElementById("DisplayDice").innerHTML = "D8";
}
//D10
function D10(){
  DiceNumber = 10;
  setTimeout(() => { document.getElementById("D10").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D10').classList.add('animate__tada');
  document.getElementById("DisplayDice").innerHTML = "D10";
}
//D12
function D12(){
  DiceNumber = 12;
  setTimeout(() => { document.getElementById("D12").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D12').classList.add('animate__tada');
  document.getElementById("DisplayDice").innerHTML = "D12";
}
//D20
function D20(){
  DiceNumber = 20;
  setTimeout(() => { document.getElementById("D20").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D20').classList.add('animate__tada');
  document.getElementById("DisplayDice").innerHTML = "D20";
}
