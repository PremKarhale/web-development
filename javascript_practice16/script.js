
// let button = document.getElementById("btn");
// button.addEventListener("click",()=>{
//    alert("hey the box is clicked by you ")

// })


let button = document.getElementById("btn");
 button.addEventListener("click",()=>{
    let box=document.querySelector(".box");
   if (box.innerHTML.includes("CLICK ME ONCE")) {
    box.innerHTML="<b> hey i am the box here </b>"
   }else{
    box.innerHTML="CLICK ME ONCE"
   }

})
