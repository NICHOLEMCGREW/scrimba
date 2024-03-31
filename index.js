//document.getElementById("count-el").innerText = 5

//cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// 1. Create two variables, myAge and humanDogRatio

// let myAge = 38
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let count = 5

//count + 1
// count = count + 1

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 75
// bonusPoints = bonusPoints + 45

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// Setting up the the race 🏎 🏎 🏎

// countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

// countdown()

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function logNumber() {
//     console.log(42)
// }

// logNumber()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times

// function sum() {
//     let sum = lap1 + lap2 + lap3
//     // console.log(sum)
// }

// sum()


// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//    lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()


// console.log(lapsCompleted)


// let countEl = document.getElementById('count-el')
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// 1. Create a function, save(), which logs out the count when it's called


// function save(){
//     // console.log(count)
// }
// save()


// Create a variable, message, that stores the string: "You have tree new notifications"
// let username = "per"
// let message = "You have tree new notifications"

// let messageToUser = `${message}, ${username}!`

// console.log(messageToUser)

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = 'Nichole'
// let greeting = "Hi, my name is"
// let myGreeting = `${greeting} ${name}`

// console.log(myGreeting)

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById('welcome-el')


// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// let name = 'Nichole'
// let greeting = "Welcome back"

// Render the welcome message using welcomeEl.innerText

// welcomeEl.innerText = `${greeting} ${name}`

// welcomeEl.innerText += ' 👋'
// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById('save-el')
// let countEl = document.getElementById("count-el")
// let count = 0

// console.log(saveEl)

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     let countStr = count + " - "
//     // 3. Render the variable in the saveEl using innerText
//     saveEl.innerText += countStr
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    let span = document.createElement("span"); // Create a new <span> element
    span.textContent = countStr; // Set the text content of the <span> element
    saveEl.appendChild(span); // Append the <span> element to the save-el element
}


// Google:
// innerText alternative mdn
