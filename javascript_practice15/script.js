console.log("Script.js is initiallising ");

let box = document.querySelector(".container").children
console.log(box)
 
function getrandomcolor(){
     let val1= Math.ceil(0+Math.random()*(255-0))
     let val2= Math.ceil(0+Math.random()*(255-0))
     let val3=Math.ceil(0+Math.random()*(255-0))
     return `rgb(${val1},${val2},${val3})`

}
Array.from(box).forEach(element => {
    element.style.backgroundColor=getrandomcolor();
    element.style.color=getrandomcolor();
});
