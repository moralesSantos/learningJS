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


