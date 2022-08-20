//let sentence = ["Hello","my","name","is","kalyani"]
//let greetingEl = document.getElementById("greeting-el")

//for (let i=0; i<SVGFEComponentTransferElement.length; i++) {
   // greetingEl.textContent += sentence[i] +" "
//}

let player1Time = 102
let player2Time = 107
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRaceTime = getFastestRaceTime()

console.log(fastestRaceTime);

//write a function that returns the total race time
//call/invoke the function and returned value in a new variable
// finally log the variable out

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalRaceTime = getTotalRaceTime()
//console.log(totalRaceTime);

//let randomNumber = Math.random()*6

//console.log(randomNumber);

let floorNumber = Math.floor(3.456655461)
//console.log(floorNumber);

//Make dice
let randomNumber =Math.floor(Math.random()*6)+1
//console.log(randomNumber);

//create a function, rolldice(), that returns a random numberbetween 1 and 6
function rollDice() {
    let randomNumber = Math.floor (Math.random() * 6) + 1
    return randomNumber
}
//console.log(rollDice());


//Logical Operators
let hasCompleteCourse = true
let giveCertificate = true

if (hasCompleteCourse === true && giveCertificate === true) {
        generateCertificate()
    }


function generateCertificate() {
    console.log("Generating Certificate....")
}


let hasSolveChallege = false
let hasHintsleft = false

if (hasSolveChallege === false && hasHintsleft === false) {
    showSolution()
}

function showSolution(){
    console.log("Showing the Solution...")
}

//Objects - store data in-depth -composite/complex data type
//key-value pairs

let course ={
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "per Harald Borgen",
    length: 63,
    isfree : true,
    tags : ["html","css"]
}


console.log(course.length);