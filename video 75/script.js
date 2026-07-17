console.log("This is Rohan")
console.log("This is Muntazir Abbas")
setTimeout(() => {
    console.log("I am inside timeout")
}, 0);
setTimeout(() => {
    console.log("I am inside timeout 2")
}, 0);
setTimeout(() => {
    console.log("I am inside timeout 3")
}, 0);
console.log(" The End")


const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
   sc.onload = () => callback("Muntazir", fn);
    document.head.append(sc)

}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )