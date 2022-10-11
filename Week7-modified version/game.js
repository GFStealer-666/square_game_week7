window.onload = pageLoad;

function pageLoad(){
	var startButton = document.getElementById('start');
	document.getElementById('reset').style.visibility = 'hidden';
	startButton.onclick = startGame;
}

function startGame(){
	var boxValue = document.getElementById('numbox');
	if(boxValue.value >= 1){
		score = document.getElementById("score").value = 0;	
		timeStart();
		addBox();
		alert("Ready");	
	}
	else{
		alert("Invaild value input , Please try again!");
		boxValue.value = "";
	}	
}

function timeStart(){
	toggleStartButton();
	var TIMER_TICK = 1000;
	var x = document.getElementById('clock');
	var difficulty = document.getElementById('difficulty').value;
	var timer = document.getElementById('clock').value = difficulty;
	var timer_interval = setInterval(timeCount , TIMER_TICK);
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");	
		timer = timer - 1; 
		x.innerHTML = timer;
		if(timer <= 0 && allbox.length >= 1){
			alert("Game over , Please try again");
			clearInterval(timer_interval);
			clearScreen();
		}
		else if (timer > 0 && allbox.length == 0){
			alert("Congratulation , You win!");
			clearInterval(timer_interval);
			clearScreen();
		}
	}

}

function addBox(){
	var numbox = document.getElementById('numbox').value;
	var gameLayer = document.getElementById('game-layer');
	var colorDrop = document.getElementById('color').value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement('div');
		tempbox.classList.add('square' , colorDrop);
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	var gameLayer = document.getElementById('game-layer');
	gameLayer.onclick = function(){
		score -= 200;
		

		var scoreDisplay = document.getElementById("score").textContent = score; 

		if(score <= 0){
			score == 0;
		}
	}
	box.onclick = function(){
		box.parentNode.removeChild(box);
		score += 1200;
		var scoreDisplay = document.getElementById("score").textContent = score; 
	}
}

function clearScreen(){
	var leftBoxCount = document.querySelectorAll("#game-layer div");	
	for (var i=0;i<leftBoxCount.length;i++){
		leftBoxCount[i].remove();
	}
	var scoreDisplay = document.getElementById("score").textContent = "0"; 
	var boxValue = document.getElementById('numbox').value ="";

}

function toggleStartButton(){
	document.getElementById('start').style.visibility = 'hidden';
	document.getElementById('reset').style.visibility = 'visible';	
}

function resetButton(){
	resetButton.onclick = clearScreen();
}




