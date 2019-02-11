var countup = false;
var start = false;
var totalseconds = 0;

var zodiac = ['mouse', 'cow', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'chicken', 'dog', 'pig'];
var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function game(id) {
	start = turn(id);
	if (start) {
		if (!countup) {
			countup = setInterval(setTime, 1000);
		}
	}
	else {
		clearInterval(countup);
	}

}

function setTime() {
	++totalseconds;
	document.getElementById("timer").innerHTML = totalseconds;
}

function turn(id) {

	console.log("game turn");
	if (id === zodiac[0]) {
		document.getElementById(id).innerHTML = "🍊";
		zodiac.shift();
	}
	else {
		shakeCard(id);
	}

	var elements = document.getElementsByClassName("card");
	var i;
	for (i = 0; i < elements.length; i++) {
		if (elements[i].innerHTML !== "🍊") {
			return true;
		}
	}

	return false;
}

function shakeCard(id) {
	var card = document.getElementById(id);
	card.classList.add('animated', 'shake');

	card.addEventListener(
		'animationend', 
		function() { 
			card.classList.remove('animated', 'shake');
	 })
}

function startGame() {
	shuffle(numbers);
	var elements = document.getElementsByClassName("card");
	var i;
	for (i = 0; i < elements.length; i++) {
		var animal = zodiac[numbers[i]];
		console.log(animal);
		elements[i].id = animal;
		elements[i].innerHTML = retIcon(animal);
	}
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function retIcon(animal) {
	console.log(animal);
	switch (animal) {
		case "mouse": 
			return "🐁";
		case "cow": 
			return "🐄";
		case "tiger": 
			return "🐅";
		case "rabbit": 
			return "🐇";
		case "dragon": 
			return "🐉";
		case "snake": 
			return "🐍";
		case "horse": 
			return "🐎";
		case "sheep": 
			return "🐏";
		case "monkey": 
			return "🐒";
		case "chicken": 
			return "🐔";
		case "dog": 
			return "🐕";
		case "pig": 
			return "🐖";
	}
}