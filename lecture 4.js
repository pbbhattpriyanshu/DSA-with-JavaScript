for(let i=1; i<=5; i++) {

    for(let j=i; j<=4; j++){
        process.stdout.write("-")
    }

    for(let j=1; j<=i; j++) {
        process.stdout.write("* ")
    }


    console.log();
    
}

// for (let i = 1; i <= 5; i++) {
//     // Print spaces
//     for (let j = i; j < 5; j++) {
//         process.stdout.write(" ");
//     }

//     // Print stars
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write("*");
//     }

//     console.log(); // New line
// }
