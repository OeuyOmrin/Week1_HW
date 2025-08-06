let game = ["Rock", "Paper", "Scissors"];

let player =  Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);

let playerChoice = game[player];
let computerChoice = game[computer];

console.log("Player chose: " + playerChoice);
console.log("Computer chose: " + computerChoice);

//win conditions
if(playerChoice === "Rock" && computerChoice === "Scissors"){
    console.log("Player wins!"); 
} else if(playerChoice === "Scissors" && computerChoice === "Paper"){
    console.log("Player wins!");
} else if(playerChoice === "Paper" && computerChoice === "Rock" ){
    console.log("Player wins!");
}

//lose conditions
if(playerChoice === "Rock" && computerChoice === "Paper"){
    console.log("Computer wins!");
}else if(playerChoice === "Scissors" && computerChoice === "Rock"){
    console.log("Computer wins!");
}else if(playerChoice === "Paper" && computerChoice === "Scissors"){
    console.log("Computer wins!");
}

//tie condition
if(playerChoice == computerChoice){
    console.log("It's a tie! Both chose " + playerChoice)
}


