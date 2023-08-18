var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){
    var clutter = ""
    for(var i = 0;i<60;i++){
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var runTime = setInterval(function(){
        if(timer > 0){
            timer--;
            document.getElementById("timerVal").innerHTML = timer;
        }else{
            clearInterval(runTime);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;

        }
    },1000);
}


function getNewHit(){
    hitrn = Math.floor(Math.random() * 10)
    console.log("hitrn vlaue",hitrn);
    document.getElementById("hitVal").innerHTML = hitrn
}


function increaseScore(){
    score += 10;
    document.getElementById("scoreVal").textContent = score;   
}

// event bubbling.--> 
// jispe click karoge us particuller element par event raise hoga. aur eventListner na milne par vo parent par eventListner ko search karega , aur vaha bhi nahi mila to vo parent ke parent ke parent par event listner ko search karega.

var a = document.querySelector("#pbtm");
a.addEventListener("click", function(e){
    var clickedNumber = Number(e.target.textContent);
    if (clickedNumber === hitrn){ 
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


makeBubble();
runTimer();
getNewHit();

