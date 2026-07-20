// let obj = {
//     a: 1,
//     b:  "Harry"
// }
//     console.log(obj)

//     let animal = {
//         eats:true
//     };
//     let rabbit = {
//         jumps:true
//     };
//     rabbit.__proto__=animal;

class Animal{
    constructor(name){
        
        this.name = name
        console.log("This object is being created")

    }
    eats(){
        console.log("kha rha hu")
    }
 jumps(){
    console.log("kood rha hu")
}
}
class Lion extends Animal{
    constructor(name){
    super(name)
    }

      eats(){
        super.eats()
        console.log("kha rha hu roar")
    

    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("shera");
console.log(l)
