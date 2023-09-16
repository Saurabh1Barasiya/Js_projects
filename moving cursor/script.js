let main = document.getElementById("main");
console.log(main);

let cur = document.getElementById("cur");

main.addEventListener("mousemove",(e)=>{
    cur.style.left = e.x+"px"
    cur.style.top = e.y+"px"
})