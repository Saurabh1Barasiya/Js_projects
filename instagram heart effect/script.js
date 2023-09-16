console.log("i am working");


let ctn = document.getElementById("ctn");

let iTag  = document.querySelector("i");

ctn.addEventListener("dblclick", (event) => {

    iTag.style.transform = "translate(-50%,-50%) scale(6)";

    setTimeout(() => {
        iTag.style.opacity=-1;
    }, 2000);
})

