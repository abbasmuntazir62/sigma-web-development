function nice(name) {
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are good!")
    console.log("Hey" + name + "you are good tool!")
    console.log("Hey" + name + "you are skilled!")
}
// nice("Harry")
// nice("ABBAS")

function sum(a ,b, c = 3) {
    // console.log(a + b + c)
    return a + b + c
}
result1 = sum(2,6)
result2 = sum(3,1)
result3 = sum(5,3)

console.log("the sum of these numbers:",result1)
console.log("the sum of these numbers:",result2)
console.log("the sum of these numbers:",result3)

const func1 = (x)=>{
    console.log("I am arrow function",x)
}
func1(34);
func1(66);
func1(84);