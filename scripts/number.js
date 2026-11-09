function guessrandomnumber() {
    let x = Math.floor(Math.random() * 10) + 1;
    let y;
    while (y != x) {
        y = prompt("Guess a number between 1 and 10");
    }
    console.log("You guessed the correct number " + x);
}
function generaterandomarray() {
    let number = prompt("Enter the length of the array", "10");
    let lenght = parseFloat(number);
    let array = [];
    for (let i = 0; i < lenght; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log("Generated array: " + array);
    return array;
}

