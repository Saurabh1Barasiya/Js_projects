let text = document.querySelector("h4");
console.log(text);

let btn = document.getElementById("btn");
console.log(btn);

let flag = true;
btn.addEventListener("click",function(){
    if (flag === true){
        text.textContent = "Friend";
        text.style.color = "green";
        btn.textContent = "Remove Freind";
        flag = false;
    }else{
        text.textContent = "Stranger";
        text.style.color = "black";
        btn.textContent = "Add Freind";
        flag = true;
    }
})