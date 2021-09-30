const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const addNumbers = function(sum=0, numsLeft, completionCallback) {
    
    if (numsLeft === 0) {
        return completionCallback(sum);
    }

    if (numsLeft > 0) {
        rl.question("Please choose a number: ", function(answer) {
            sum += parseInt(`${answer}`);
        })
        
        console.log(sum);
        addNumbers(sum, numsLeft-1, completionCallback);
    }
}

function completionCallback(sum) {
    console.log(`Total Sum: ${sum}`);
}

addNumbers(0, 5, completionCallback);
