let canvas = document.querySelector("#canvas");
let time = document.querySelector("#time");
let guess = document.querySelector("#guess");
let score = document.querySelector("#score");




function makeBubbles(){
    for(i=0;i<44;i++){
        let randomNumber =Math.floor(Math.random()*10) ;
        console.log(randomNumber);
        canvas.innerHTML +=  `<div class="bubble">${randomNumber}</div>`;
    }
}
makeBubbles();

let start = 5;

setInterval(timer,1000);

function timer(){
    if(start>0){
        start--;
        time.innerHTML = start;
    }
    else{
       canvas.innerHTML = `<h1> Game Over </h1>`;
       canvas.style.backgroundColor=' rgb(34, 131, 131)';
    }
}

function guessNumber(){
    let randomGuess = Math.floor(Math.random()*10);
    guess.innerHTML = randomGuess;
}

guessNumber();

let points=0;

canvas.addEventListener('click',function(e){
console.log(e);
let num = e.target.textContent;
console.log(num);
if(num== guess.textContent){
    points = points + 10;
    console.log('clicked right');
    score.innerHTML = points;
    canvas.innerHTML= '';
    makeBubbles();
    guessNumber();
}
})