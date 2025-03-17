console.log("hello world")

// let cont1=document.getElementsByClassName("box")
// console.log(cont1)
// console.log(cont1[2])
// cont1[2].style.backgroundColor="red"

// let cont =document.getElementById("green")
// console.log(cont)
// cont.style.backgroundColor="orange"


document.querySelector(".box").style.backgroundColor="green"
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="green";
});



