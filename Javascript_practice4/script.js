console.log("practice of all the loops used in the javascript ");


for (let a = 0; a < 10.; a++) {
    console.log(a);
    
}
let obj={
    name:":"+" prem",
    role:"softwhere engineer",
    specification:"java,dsa , web dev",
    
}
for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

let i=1;
while (i<10) {
    console.log(i+3);
    i++;
    
}
console.log(" ");

let b=0;
do {
    console.log(b)
    b++;
} while (b<6);