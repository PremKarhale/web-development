async function sleep(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);

        }, 1000);

    })

}


(async function call() {
    let a = await sleep(45);
    console.log(a);
    let b = await sleep(90);
    console.log(b);

    await sleep(2000);
    let [x, y, ...rest] = [1, 2, 7, 8, 9];
    console.log(x, y, ...rest)

let obj ={
    a:1,
    b:2,
    c:3
}
let { a: objA, b: objB } = obj;
console.log(objA, objB);



})
    ()










