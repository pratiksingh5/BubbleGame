let canvas = document.querySelector("#canvas");
let time = document.querySelector("#time");
let guess = document.querySelector("#guess");
let score = document.querySelector("#score");
let btn = document.querySelector('.btn');
let final = document.querySelector('#final')
let point = document.querySelector('#points');
let loader = document.querySelector('#loader');

let animate = gsap.timeline();

animate.to('.lds-grid',1.5,{
  delay:1.1,
  opacity:0
},)

animate.to('#one',1,{
  x:'-100%',
 ease: "power4.out"
})
animate.to('#two',1,{
  x:'100%',
 ease: "power4.out"
},"-=1")

setTimeout(function(){
 loader.style.display= "none";
},4000)


function makeBubbles() {
  for (i = 0; i < 45; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
  
    canvas.innerHTML += `<div class="bubble">${randomNumber}</div>`;
  }
}
makeBubbles();

let start = 63;

setInterval(timer, 1000);

function timer() {
  if (start > 0) {
    start--;
    time.innerHTML = start;
  } else {
    canvas.style.display = 'none';
    final.style.display ='block';
    point.innerHTML= points;
   
    canvas.style.backgroundColor = "#fefefe";
  }
}

function guessNumber() {
  let randomGuess = Math.floor(Math.random() * 10);
  guess.innerHTML = randomGuess;
}

guessNumber();

let points = 0;

canvas.addEventListener("click", function (e) {
  console.log(e);
  let num = e.target.textContent;
 
  if (num == guess.textContent) {
    points = points + 1;
    
    score.innerHTML = points;
    canvas.innerHTML = "";
    makeBubbles();
    guessNumber();
  }
});

btn.addEventListener('click', function(){
  location.reload();
})