let a = prompt("This is first number")
let b = prompt("This is second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
 let sum = parseInt(a) + parseInt(b)
 function main(){
 let x =1;
 try {
     console.log("This is sum of two number",sum*x)
     return true
     
} catch (error) {
    console.log("Error aa gaya Muntazir bhai")
    return false
}
    finally{
        console.log("files are being closed and db connection is closed")
    }
 }
 let c = main()
