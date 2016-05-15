var botScore=0,
	playerScore=0;

/*document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
	var playersWeapon = "rock";
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsScissors(){
	var playersWeapon = "scissors";
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");

}
function playerThrowsPaper(){
	var playersWeapon = "paper";
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");

}

*/

var getPlayerMove = function();
var playerMove = prompt("Enter your move - rock, paper, or scissors");
switch (move) {
	case 'rock':
		var playerMove = "rock";
		var botsWeapon = getComputerMove();
		checkWhoWon(botsWeapon,"rock");
		break;
	case 'paper':
		var playerMove = "paper";
		var botsWeapon = getComputerMove();
		checkWhoWon(botsWeapon,"paper");
		break;
	case 'scissors':
		var playerMove = "scissors";
		var botsWeapon = getComputerMove();
		checkWhoWon(botsWeapon,"scissors");
		break;
	default:
		console.log("Sorry, please enter a valid move.");
}


function getComputerMove(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	
	return botsWeapon;

}
function checkWhoWon(botsWeapon,playersWeapon){
	console.log(playersWeapon)
	if(botsWeapon==playersWeapon){
		console.log("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	console.log("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	console.log("Yay, you're a winner!");

}

/*
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
*/