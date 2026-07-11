function adjective(){
let r = Math.random();

if (r < 0.33){
    return "crazy";
}

else if (r < 0.66){
    return "Amazing";
}

else {
    return "Fire";
}
}


function shopName(){
let r = Math.random();

if (r < 0.33){
    return "Engine";
}

else if (r < 0.66){
    return "food";
}

else {
    return "Garments";
}
}



function Anotherwords(){
let r = Math.random();

if (r < 0.33){
    return "Bros";
}

else if (r < 0.66){
    return "Limited";
}

else {
    return "Hub";
}
}

let businessName = adjective() + " " +shopName() +" "+ Anotherwords();
console.log(businessName);