var countup = false;
var start = false;
var totalseconds = 0;
var cards = document.getElementsByClassName("card");
var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var zodiac = [
	{	
		m_id :'mouse',
		m_icon : '🐁'
	},
	{
		m_id : 'cow',
		m_icon : '🐄' 
	},
	{
		m_id : 'tiger',
		m_icon : '🐅'
	},
	{
		m_id : 'rabbit',
		m_icon : '🐇'
	},
	{
		m_id : 'dragon',
		m_icon : '🐉'
	},
	{
		m_id : 'snake',
		m_icon : '🐍'
	},
	{
		m_id : 'horse',
		m_icon : '🐎'
	},
	{
		m_id : 'sheep',
		m_icon : '🐏'
	},
	{
		m_id : 'monkey',
		m_icon : '🐒'
	},
	{
		m_id : 'chicken',
		m_icon : '🐔'
	},
	{
		m_id : 'dog',
		m_icon : '🐕'
	},
	{
		m_id : 'pig',
		m_icon : '🐖'
	}
];


// Start Game Button
function startGame() {
	// start timer
	start = true;
	countup = setInterval(setTime, 1000);

	// Shuffle the array
	shuffle(numbers);

	for (var i = 0; i < cards.length; i++) {
		startCard(cards[i], zodiac[numbers[i]]);
	}
}

function startCard(card, animal) {
	card.id = animal.m_id;
	card.textContent = animal.m_icon;
}

// Every Card Turn
function game(id) {
	
	// Flip the card and check if game ended
	start = turn(id);
	
	if (!start) {
		clearInterval(countup);
		alert("Congratulations! You took " + totalseconds + " seconds.");
		location.reload();
	}
}

function setTime() {
	++totalseconds;
	document.getElementById("timer-value").textContent = totalseconds;
}

function turn(id) {

	console.log("game turn");

	var card = document.getElementById(id);

	if (card.textContent === "🍊")
	{
		return start;
	}

	if (id === zodiac[0].m_id) {
		card.textContent = "🍊";
		card.removeAttribute("id");
		zodiac.shift();
	}
	else {
		shakeCard(id);
		return start;
	}

	for (var i = 0; i < cards.length; i++) {
		if (cards[i].textContent !== "🍊") {
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

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}