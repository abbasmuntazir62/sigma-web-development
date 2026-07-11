let a = [1,2,3,4,5]


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

   
        
a.forEach((Value,index,arr)=>{
    console.log(Value,index,arr)
})

let obj = {
    a1: 1,
    a2: 2,
    a3: 3,
}
for(const key in obj ) {
    if(Object.hasOwnProperty.call(obj,key)) {
        const element = obj[key];
        console.log(element)
    }
}