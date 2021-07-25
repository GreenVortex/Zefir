//Function for Generating dice number
function NumGen() {
  document.getElementById("GenNum").innerHTML = Math.floor(Math.random() * DiceNumber) + 1;
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
}
//D6
function D6(){
  DiceNumber = 6;
  setTimeout(() => { document.getElementById("D6").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D6').classList.add('animate__tada');
}
//D8
function D8(){
  DiceNumber = 8;
  setTimeout(() => { document.getElementById("D8").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D8').classList.add('animate__tada');
}
//D10
function D10(){
  DiceNumber = 10;
  setTimeout(() => { document.getElementById("D10").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D10').classList.add('animate__tada');
}
//D12
function D12(){
  DiceNumber = 12;
  setTimeout(() => { document.getElementById("D12").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D12').classList.add('animate__tada');
}
//D20
function D20(){
  DiceNumber = 20;
  setTimeout(() => { document.getElementById("D20").classList.remove('animate__tada'); }, 1000);
  document.getElementById('D20').classList.add('animate__tada');
}

//function for splash progressbar
   UIkit.util.ready(function () {
       var bar = document.getElementById('js-progressbar');
       var animate = setInterval(function () {
           bar.value +=10 ;
         if (bar.value >= bar.max) {
               clearInterval(animate);
           }
       }, 400);
   });
