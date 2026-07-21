console.log(a1);
(async function main(){
    // //     let a = await sleep();
    // //     console.log(a)
    // // let b = await sleep();
    // // console.log(b);
    // // })()
    
    // let [x, y,...rest] = [1,2,3,4,5,6];
    // console.log(x, y, rest);
    // })()
    
    let obj = {
        a:1,
        b:2,
        c:3,
    }
    let {a,b,c} = obj
    console.log(a, b, c)
    
    let arr = [1,4,6]
    console.log(arr[0]+arr[1]+arr[2])
})()

   var a1 = 6;

const sleep = async ()=>{
    return new Promise((resolve,reject)=> {
        setTimeout (() => {
            resolve(45)
        },1000);

    })
    
}
const sum = async (a, b, c)=>{
    return a+b+c
}