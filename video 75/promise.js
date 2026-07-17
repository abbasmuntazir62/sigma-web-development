console.log("This is my promises")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5) {
     reject("No random number was not supporting you")
    }  else {
        setTimeout(()=>{
            console.log("yes i am Muntazir Abbas")
            resolve("Abbas")
        },3000);
    }

    
})
let prom2 = new Promise((resolve, reject) => {
 let a = Math.random();
    if(a < 0.5) {
     reject("No random number was not supporting you2")
    }
    else {
          setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})
    let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
