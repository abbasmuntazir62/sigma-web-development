

// async function getData(){
//     return new Promise((resolve,reject) => {
// setTimeout(() =>{
//     resolve(455)
//     }, 3500);
// })
// }
// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    //   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //      let data = await x.json()
    //      console.log(data)

    // }
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}


async function main() {
    console.log("Loading modulus")
    console.log("DO something else ")
    console.log("Load data")

    // let data = getData()
    let data = await getData()


    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()
// console.log("data")
// console.log("process data")
// console.log("task 2")
// })
