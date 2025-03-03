 /*generate a faulty calculator where the operations is incorrect order 
 and  it give incorrect result 10% of the times .
 hint:Generate a random no .
 */
 let random =Math.random()
 let a=prompt("Enter the no 1.")
 let b=prompt("Enter the second no")
 let c=prompt("Apply operation")

 let obj={
   "+":"-",
   "*":"/",
   "-":"/",
   "/":"+"

 }
 console.log(random)
    if(random>0.9){
        //then calculation is correct 
        alert( `the result is ${eval(`${a} ${c} ${b}`)}`)
    }

    else{
        //the result generated is incorrect
        c=obj[c];
        alert( `the result is ${eval(`${a} ${c} ${b}`)}`)

    }