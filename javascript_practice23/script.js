class animal{
    constructor(name){
        this.name=name;
        console.log("it is a animal class ")
    }
     eats(){
        console.log("eating")
     }
      run(){
        console.log("running")
      }
} 


 let a =new animal();
 console.log(a)
 a.eats();
 a.run();

 class lion extends animal{
 
    constructor(name){
        super(name);
        console.log("it is a animal class ")
    }
    
    hunt(){
        console.log("lion is hunting..")
    }
    eats(){
        console.log("lion is eating...")  // method overriding (method with the same name , same parameter but in the different class . )

    }

 }
  let l = new lion("shera");
  console.log(l)
  l.hunt();
  l.eats();
  l.run();
  l.eats();