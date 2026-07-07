let nums1 = parseFloat(prompt("enter the furst number"))
let nums2 = parseFloat(prompt("enter the furst number"))
let operator = prompt("Enter the operator (+,-,*,/)");
let random = Math.random();
let result;

if (random < 0.1){
    switch (operator){
        case "+":
        result = nums1 - nums2;
        break;
         case "-":
        result = nums1 /  nums2;
        break;
          case "*":
        result = nums1 + nums2;
        break;
         case "/":
        result = nums1 ** nums2;
        break;
        default:
            result = "invalid";
    }
    console.log("faulty calculator");
}
else {
     // 90% chance of correct operation
     switch(operator){
     case "+":
        result = nums1 + nums2;
        break;
         case "-":
        result = nums1 - nums2;
        break;
          case "*":
        result = nums1 * nums2;
        break;
         case "/":
        result = nums1 / nums2;
        break;
        default:
            result = "invalid";
    }
    console.log("correct calculator");
}
console.log("Result:", result);

console.log("Result:", result);

