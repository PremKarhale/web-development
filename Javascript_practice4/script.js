console.log("practice of all the loops used in the javascript ");

// FOR LOOP
for (let a = 0; a < 10.; a++) {
    console.log(a);
    
}
// FORIN LOOP
let obj={
    name:":"+" prem",
    role:"softwhere engineer",
    specification:"java,dsa , web dev",
    
}
for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}
// WHILE LOOP

let i=1;
while (i<10) {
    console.log(i+3);
    i++;
    
}
console.log(" ");

// DO WHILE LOOP 
let b=0;
do {
    console.log(b)
    b++;
} while (b<6);