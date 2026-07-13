console.log("Abbas")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundcolor ="red"
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"
// document.getElementById("red").style.backgroundColor ="green"
document.getElementById("redbox").style.backgroundColor = "red"
 document.querySelector(".box").style.backgroundColor = "green";
 document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor = "green";
        }) 