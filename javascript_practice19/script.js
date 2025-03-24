 async function getdata (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(455);
            let a =Math.random();
            if (a>0.5){
                reject("the no is not been processed ");
                
            }else{
                resolve(450);
            }
            
            
        },100);
    })

}
async function main(){
console.log("loading modules ")
console.log("it can be anything")
console.log("loaging data... ")

let data = await getdata();
console.log(data)
console.log("processing data ....")
 await new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Data processed successfully !!!");
        resolve();
    }, 100);
 })

}
main()




// This is the one way of doing this promise in a conventional way 

// console.log("loading modules ")
// console.log("it can be anything")
// console.log("loaging data ")

// let data =getdata();

// data.then((a) => {
//     console.log(a)
//     if(a){
//         console.log("processing data ")
//     }

// }
// ).catch((err) => {
//     console.log("the no. is not been processed")
  
// }
// )


