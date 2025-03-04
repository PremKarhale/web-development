let a=[23,44,56,78,36,72,30]

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
    
// }
// for (const element of a) {
//   console.log(element)
    
// }
//  let newarray=[];

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     newarray.push(element**2)

// }
// console.log(newarray)

let newarr =a.map((e)=>{  //map properties  map()
    return e**2;
}
)

console.log(newarr)