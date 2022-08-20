//Check if the person is old enough th enter the nightclub (21)
//Log a suitable message to the console in both case

let age = 22

//if less than 21 -> "You can not enter the club!"
//else            -> "Welcome!"
if (age < 21) {
    console.log("You can not enter the club!")
}else {
    console.log("Welcome!")
}

//check if the person is eligible for a birthday card from the king! (100)

let Age = 100

//if less than 100    -> "Not elegible"
//else if exactly 100 -> "How is your birthday card from the king!"
//else                -> "Not elegible, You have already gotten one!"

if (Age < 100) {
    console.log("Not elegible")
}else if (Age == 100) {
    console.log("Hoe is your birthday card from the king!")
}else{
    console.log("Not elegible, You have already gotten one!")
}

console.log(4 === 3) // false
console.log(5>2) // true
console.log(12>12)//false
console.log(3<0)//false
console.log(3>=3)//true
console.log(11<=11)//true
console.log(3<=2)//false

//Intro to Arrays
//Array - ordered list of items

let featuredPost = [
    "Check my netflix tone",
    "Here's the code for my project",
    "I have just relaunche py portfolio"
]
console.log(featuredPost[0]);
console.log(featuredPost.length);

//Create an array lists your i.e. experience, education, licenses, skills or similar
//the items of the array should be  strings

let experience = [
    "Software engineer at Konver.ai",
    "Student at Edyoda",
    "student at PCE"
]

let education = [
    "Data Science",
    "Engineering",
    "Diploma in Engineering"
]

let Skills = [
    "Python",
    "SQL",
    "HTML",
    "JavaScript"
]

//Array Indexes
console.log(featuredPost[0]);
console.log(featuredPost.length);

// Create an an array that describes yourself , used th ethree premitive datatypes that yuo have learnd
//It should contain your name (string) , your age (number), weather you like pizza (boolean)

let me = [ "Kalyani Bajirao",22,true]


let cards =[7,4]
cards.push(5)
console.log(cards);


let messages = [
    "Hey, How's it going?",
    "I'm great, thank you!, How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "same here!"

messages.push(newMessage)
console.log(messages);


//count eith javascript

//count to ten!!

//we need to specify....

//where should we start counting?
//where the finish line?
//what's the step size we should use?

//START                   FINISH                 STEP SIZE
for (let count =1;        count <11;             count += 1) {
    console.log(count)
}

for (let count =1;        count <11;             count += 2) {
    console.log(count)
}

for (let count =10;        count <21;             count += 1) {
    console.log(count)
}


for (let i =0; i<6; i+=1){
    console.log(i)
}


for (let i =10; i<101; i+=10){
    console.log(i)
}


let Messages = [
    "Hey, How's it going?",
    "I'm great, thank you!, How about you?",
    "All good. Been working on my portfolio lately."
]
for(let i=0; i<5; i+=1){
    console.log(i)
}

let cards1 = [7,3,9]
for (let i = 0; i< cards1.length; i++ ) {
    console.log(i)
}