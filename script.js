


/**CallBack HW */
const message = function() {  
    console.log("This message will show after 4 secs");
}

setTimeout(message,4000);
//



let numbers = [1, 2, 4, 7, 3, 5, 6, 8, 15];

function isOddNumber(number) {
    return number % 2;
}

const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

// document.queryselector("#callback-btn")
//     .addEventListener("click", function() {    
//       console.log("User has clicked on the button!");
// });