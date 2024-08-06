
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
let HumanChoice = prompt("rock, paper, or scissors?")
if (HumanChoice === "rock"){
    return "rock"
} if (HumanChoice === "paper"){
    return "paper"
} if (HumanChoice === "scissors"){
    return "scissors"
}
}
console.log(getHumanChoice())