let prom1= new Promise((resove, reject) => {
    let a= Math.random()
    if(a<0.5){
        reject("there is no random no. is generated ")
    }else{
        setTimeout(() => {
            console.log("hey i am done ")
            resove("prem")
          
        },1000);
        
    }
  
}
)
let prom2= new Promise((resove, reject) => {
    let a= Math.random()
    if(a<0.5){
        reject("there is no random no. is generated ")
    }else{
        setTimeout(() => {
            console.log("hey i am done2 ")
            resove("prem2")
          
        },1000);
        
    }
  
}
)

let p3=new Promise.allSettled(([prom1],[prom2]) => {
    p3.then((a) => {
        console.log(a)
      
    }
    )    
}).catch((err => {
  console.log(err)
}
))
