//Properties of an arrays

let arr=[2,34,56,66,17]
arr[0]=566;
console.log(arr[1])
console.log(arr[4])
console.log(arr.length)
console.log(arr[0]);

console.log(arr.toString())
console.log(arr.join(" and "))
arr.pop()       
console.log(arr)
arr.push(100)
console.log(arr)
arr.push("harry") //push element at the end of the array
console.log(arr)
arr.shift()   //pop element from the starting of an array 
console.log(arr)
arr.unshift("prem")
console.log(arr) //unshift it pushes the element at the starting of an array


let a1=[3,4,5,6,7,8]
let a2=[4.6]
let b=["prem","hritik","aryan"]

console.log(a1.concat(a2,b))
