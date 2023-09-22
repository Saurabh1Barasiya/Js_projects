// thoroutling wala concept apply hgoga yha par.


// matlab jav mousemove wala event chat raha h to bhut speed se hamko clientX,ClientY ki value mil rahi h but i want ki 
// clientX,ClientY li value kam speed se mile.


// 👀👀👀👀👀👀👀👀

// mouse move to ho but execution of function mouse move wala vo kam baar ho.

// ager mouse move 170 baar chale koi baat nahi but vo function 8 baar chale.

// throutling ------->> kisi perticuller code ke no.. of ececution ko kam kar dena.


// let center = document.querySelector("#center");

// center.addEventListener("mousemove",function(dets){
//     console.log(dets.clientX,dets.clientY);
// })





// throutle function wala code start here.

const btn=document.querySelector("#throttle");
     
// Throttling Function
const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
     
    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}


document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
  // console.log("mouse move event occor");

  // har baar 1 div banao.

  var div = document.createElement("div");
  div.classList.add("imagediv");

  div.style.left = dets.clientX+"px";
  div.style.top = dets.clientY+"px";

  // with the help of appendChild()  -->  ham kisi bhi element ko kisi bhi element par laga sakte h.
  // abhi ham body par div ko add kar rahe h .

  var img = document.createElement("img");

  var imageArr = ["mypic.jpg","mypic1.jpg","mypic2.jpg","mypic3.jpg","mypic4.jpg","mypic5.jpg","mypic6.jpg","mypic7.jpg","mypic8.jpg","mypic9.jpg","mypic10.jpg"];
  // console.log(imageArr);
  var ele = imageArr[Math.floor(Math.random() * 11)];
  console.log(ele);
  // console.log(imageArr[Math.floor(Math.random() * 11)]);


  img.setAttribute("src",ele);
  console.log(img);
  div.appendChild(img);

  document.body.appendChild(div);


 
  gsap.to(img,{
    y:"0",
    ease:Power1,
    duration:.6
  })

  gsap.to(img,{
    y:"100%",
    delay:.6,
    duration:.2,
    ease:Power2,
  })
 
 

  setTimeout(()=>{
    div.remove();
  },2000);
  

}, 500));