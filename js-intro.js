//alert("Welcome to external javascript")

// let , var , const 

// declaration
// initialisation 
// use the variable/function

// browser engine/javascript engine

// var keyword variable is a global scope as well as function scope variable 
// let keyword variable is a block scope as well as function scope variable 

var fullname;
fullname = "Sanket Bhosale"

console.log(fullname)
var number1;
number1 = 100;
console.log(number1)





if (true) {
    let number2 = {
        fname: "sanket b",
        city: "pune"
    };
    console.log(typeof(number2))
}

function display() {
    var city;
    city = "Pune"

    console.log(city)

}



display()


function add (a,b){
   
    console.log(a+b)
}

add(10,30)

add(50,60)



