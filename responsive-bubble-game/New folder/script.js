let score = 0;
function incrementHit(){
    let val = Math.floor(Math.random()*10);
    document.getElementById("hit").innerHTML=val;
    console.log(val)
}

function runTimer(){
    let timer_ = 60;
    const tcount = setInterval(function(){
        if (timer_ > 0){
            timer_ --;
            let ti = document.getElementById("timer");
            ti.innerHTML = timer_
        }else{
            let maxScore = document.getElementById("score").textContent
            const finaloutput = `
            <div>
            <h3>Game Over  </h3>
            <h2>Max Score is ${maxScore} </h2>
            <h3>Game is Desigined by Saurabh Barasiya</h3>
            <h1>Software Engineer at Coforge</h1>
            </div>
            `
            
            document.getElementById("content").innerHTML = finaloutput;
            clearInterval(tcount);
        }
    },1000);
}

function makeBubble(){
    let a = document.getElementById("content");
    let ct1="";
    for (let index = 0; index < 44; index++) {   
        let rn = Math.floor(Math.random()*10);
        ct1 += `<div class="dubba">${rn}</div>`
    }

    a.innerHTML=ct1
}

// main part.
document.getElementById("content").addEventListener("click",(e)=>{
    let hitval = +document.getElementById("hit").textContent;
    let clickVal =  +e.target.textContent;
    if (hitval === clickVal){
        let a = document.getElementById("score")
        score = +a.textContent;
        score += 10;
        a.innerHTML = score;

        makeBubble()
        incrementHit()

    }else{
        console.log("galat h bhai");
    }
})



makeBubble()
runTimer()
incrementHit()
