console.log("script is loaded");
// let a =1;
// let b=2;

// console.log(a+b);

function add(a,b){
    return a+b;
}

console.log(add(5, 6));

function say(something){
    console.log(something);
}

function gratuity(total){
    console.log("10%:" + 0.10*total )
    console.log("15%:" + 0.15*total )
    console.log("20%" + 0.20*total) 
}

gratuity(20);

let a = "blank";

if (0>1){
    a = "hello";
    console.log(a);
}

console.log(a);


(function myFunction(word){
    console.log("oooo so anonymous! The word is: " + word);
})("bird");

// myFunction("woah");


//Declare an add function
function add(number1, number2) {
	return number1 + number2;
}

//Declare a function that takes a function as an argument
function doMath(operation, number1, number2) {
	return operation(number1,number2);
}


//Pass a function into another.
let sum = doMath(add, 1, 2);

console.log(sum);

let students = [
    {name: 'Max Chewnning', average:90},
    {name: 'Christian Guzman', average:65},
    {name: 'Travis Scott', average:82}
];

 
let passingStudents = students.filter(function(student){
    return student.average >70;
});

console.log(passingStudents[0].name);