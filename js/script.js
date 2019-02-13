let countup = false;
let start = false;
let totalseconds = 0;
let cards = document.getElementsByClassName("card");
let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const zodiac = [
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
let startGame = () => {
	// start timer
	start = true;
	countup = setInterval(setTime, 1000);

	// Shuffle the array
	shuffle(numbers);

	for (let i = 0; i < cards.length; i++) {
		startCard(cards[i], zodiac[numbers[i]]);
	}
}

let startCard = (card, animal) => {
	card.id = animal.m_id;
	card.textContent = animal.m_icon;
}

// Every Card Turn
let game = (id) => {
	// Flip the card and check if game ended
	start = turn(id);
	
	if (!start) {
		clearInterval(countup);
		const complete = `Congratulations! You took ${totalseconds} seconds.`;
		alert(complete);
		location.reload();
	}
}

let setTime = () => {
	++totalseconds;
	document.querySelector("#timer-value").textContent = totalseconds;
}

let turn = (id) => {
	let card = document.getElementById(id);
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

	for (let i = 0; i < cards.length; i++) {
		if (cards[i].textContent !== "🍊") {
			return true;
		}
	}

	return false;
}

let shakeCard = (id) => {
	let card = document.getElementById(id);
	card.classList.add('animated', 'shake');

	card.addEventListener(
		'animationend', 
		function() { 
			card.classList.remove('animated', 'shake');
	 })
}

let shuffle = (o) => {
	for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}