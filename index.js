// Writing a function statement:
const startProcess = function() { // proper format for function expression
    console.log('Process started ...') // action to be performed by function
}

startProcess() // prints "process started"

// Changing the outer world using a function:
const processSpeed = 12345 // declaring variable outside of function

const printProcessTimeInSeconds = function() { // syntax for function expression
    const processSpeedInSeconds = processSpeed / 1000
    console.log('Time to complete process: ' + processSpeedInSeconds)

    if (processSpeedInSeconds > 2) {
        const message = 'Slow Process Detected!'
        console.log(message)
    }
}

printProcessTimeInSeconds() // prints: "Time to complete process: 12.235" and "Slow Process Detected!"

// Returning a value from a function
function sampleFunction() { // Creating a function with the same, standard syntax
    return 'sampleValue' // Using the keyword "return" to return value
}

const returnValue = sampleFunction() // Assigning a variable to the called function
console.log(returnValue) // Prints: "sampleValue"
