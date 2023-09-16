var arr = [
    {
        dp:"https://images.unsplash.com/photo-1626818590242-5a5f27ee3971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1626818590138-c1e906bf29be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1609241728358-53d49c22c01a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1618585183371-4fc30e7213e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1618585183251-d480da5554e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1620674283252-46a662260a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1620674283252-46a662260a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1624001051001-8287dfecc07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1620674282482-35ba337e484e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1623930354140-03c5ae186bf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1620230264734-2b3e7dc74355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGdpcmwlMjBhbG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1614275696879-1759006c4e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxnaXJsJTIwYWxvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1616871154417-71fed7335b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxnaXJsJTIwYWxvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1668638805600-1eb20d4bba32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxnaXJsJTIwYWxvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1620117654333-c125fef82817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxnaXJsJTIwYWxvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1616565909855-a5c0833669c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxnaXJsJTIwYWxvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1614769842648-a7a303dd27a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxnaXJsJTIwYWxvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
]

var clutter = "";
arr.forEach((elem,idx)=>{
    clutter += `
    <div id="story" class="story"> 
        <img id="${idx}" src="${elem.dp}" alt="" />     
    </div>
    `
})

var stroyan = document.getElementById("stroyan")

stroyan.innerHTML=clutter;


// event bubbling wala concept..


stroyan.addEventListener("click",(e)=>{

    document.getElementById("full-screen").style.display="block"
    //   var value =  arr[e.target.id].story

    // aese bhi kar sakte h 
    document.getElementById("full-screen").innerHTML = `
        <img src="${arr[e.target.id].story}" alt="" />
    `

    // document.getElementById("full-screen").style.backgroundImage = `url(${arr[e.target.id].story})`

    setTimeout(() => {
        document.getElementById("full-screen").style.display="none"
    }, 3000);
})