
function getComputerChoice() {
    let random = Math.random()
if (random <.34){ 
return "rock"}
if (random > .67){
return "paper"}
else{
return "scissors"}
}
console.log(getComputerChoice())

function getHumanChoice(){
let HumanChoice = prompt("rock, paper, or scissors?").toLowerCase();
if (HumanChoice === "rock"){
    return "rock"
} if (HumanChoice === "paper"){
    return "paper"
} if (HumanChoice === "scissors"){
    return "scissors"
}
}
console.log(getHumanChoice())

var humanscore = 0
var computerscore = 0

function playround(HumanChoice, ComputerChoice) {
if (HumanChoice === ComputerChoice) {   
    return "It's a tie!"
}
if (HumanChoice === "rock" && ComputerChoice === "scissors") {
    return "You win! Rock beats Scissors"
} 
if (HumanChoice === "paper" && ComputerChoice === "rock") {
    return "You win! Paper beats Rock"
}
if (HumanChoice === "scissors" && ComputerChoice === "paper") {
    return "You win! Scissors beats Paper"
}
if (HumanChoice === "rock" && ComputerChoice === "paper") {
    return "You lose! Paper beats Rock"
}
if (HumanChoice === "paper" && ComputerChoice === "scissors") {
    return "You lose! Scissors beats Paper"
}
if (HumanChoice === "scissors" && ComputerChoice === "rock") {
    return "You lose! Rock beats Scissors"
}

}
console.log(playround())