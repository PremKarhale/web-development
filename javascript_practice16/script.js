let button = document.getElementById("btn");
 button.addEventListener("dblclick",()=>{
    let box=document.querySelector(".box");
   if (box.innerHTML.includes("CLICK ME TWICE")) {
    box.innerHTML="<b> hey i am the box here </b>"
   }else{
    box.innerHTML="CLICK ME TWICE"
   }

})

// let button = document.getElementById("btn");
// button.addEventListener("click",()=>{
//    alert("hey the box is clicked by you ")

// })