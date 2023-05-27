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

let totalSpeciesFound = 155 // Holds value of 155

function addOneSpecies() { // Function to add 1 species
    console.log('Another species has been found!')
    totalSpeciesFound++ // Syntax for adding 1
    return totalSpeciesFound // Return is important!
}

const newTotalSpeciesValue = addOneSpecies() // Declares new value to save return value
const totalSpecies = document.getElementById('total-species')
totalSpecies.innerHTML = "Total species found: " + newTotalSpeciesValue

console.log(newTotalSpeciesValue) // Prints 156

// Returning a value VS. printing a value
let orangeMackerelPopulation = 34 // Declare variable to hold population number

function subtractOneMackerel() { // Standard function syntax
    orangeMackerelPopulation-- // Standard function syntax
    return orangeMackerelPopulation // Return new population number
}

subtractOneMackerel()
subtractOneMackerel()
subtractOneMackerel()
subtractOneMackerel()
const currentMackerelPopulation = subtractOneMackerel() // Save return value to variable

console.log(currentMackerelPopulation) // Prints 29
console.log(orangeMackerelPopulation) // Also prints 29

// Making functions accept information
zone1Population = 34 // Save zone 1 current population count
zone2Population = 15 // Save zone 2 current population count

function onSpeciesPopulationChange(species, zone1Count, zone2Count) { // Function written to accept 3 arguments
    zone1Population = zone1Count // Updates value of zone1Population
    zone2Population = zone2Count // Updates value of zone2Population
    console.log(species + ' population - Zone1: ' + zone1Population + ', Zone2: ' + zone2Population)
}

onSpeciesPopulationChange('Bottlenose Dolphin', 21, 27) // Prints "Bottlenose Dolphin population - Zone1: 21, Zone2: 27"
