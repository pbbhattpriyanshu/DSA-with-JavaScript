// function
function name() {
    //code
}
// function declaration
function sing () {
    for (let i = 0; i < 6; i++) {
        console.log("Let's sing");
    }
}

//function expression
let dance = function (participators) {
    for (let i = 0; i < 6; i++) {
        console.log("Let's dance", participators);
    }
}

//fat Arrow function 
// let name = () => {
    //code
// }


let song = () => {
    console.log("Believer");
    
}

let sum = function(a=0, b=0, c=0, ...val) {    //Pass parameter, default value, rest value
    console.log(a,b,c,val);
}


//name(); //call the function
// sing();
// song();
//dance('giyan');
sum(34,3,5,43,543,5,4,32,334)     //Pass arguments