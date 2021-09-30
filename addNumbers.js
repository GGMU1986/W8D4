const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum=0, numsLeft, completionCallback) {
    
    if (numsLeft === 0) {
        return completionCallback(sum);
    }

    if (numsLeft > 0) {
        rl.question("Please choose a number: ", function(answer) {
            sum += parseInt(answer);
            console.log(sum);
            addNumbers(sum, numsLeft - 1, completionCallback);       
        })
    }
    
}

function completionCallback(sum) {
    console.log(`Total Sum: ${sum}`);
    rl.close();
}

addNumbers(0, 3, completionCallback);

