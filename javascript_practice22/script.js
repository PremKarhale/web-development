let a = prompt("Enter the number")
let b = prompt("Enter another number ")

try {
    let sum = parseInt(a) + parseInt(b);
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("you have entered a string.");
}
console.log("the sum of the two no are :", sum)

} catch (error) {
    console.log("error aagaya bhaii... ")
}
finally{
    console.log("closing  the execution and the db, conectivity...")  // it executed even when  every thing is wrapped into a function and fuction is given with a return statement , it still ececutes.

    // that is the reason why we use finally statement in any condition it executed the content inside it .
}


