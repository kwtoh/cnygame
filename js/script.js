var countup = false;
var start = false;
var totalseconds = 0;
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
		m_icon : '🐓'
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


function game(id) {
	start = turn(id);
	console.log(start);
	if (!start) {
		clearInterval(countup);
		alert("Congratulations! You took " + totalseconds + " seconds.");
		location.reload();
		//document.getElementsByClassName("party-popper").css("display", "");
		//partyPopper('.party-popper', true);
	}
}

function setTime() {
	++totalseconds;
	document.getElementById("timer-value").innerHTML = totalseconds;
}

function turn(id) {
	console.log("game turn");
	var card = document.getElementById(id);

	if (card.innerHTML === "🍊")
	{
		return start;
	}

	if (id === zodiac[0].m_id) {
		card.innerHTML = "🍊";
		card.id = "";
		zodiac.shift();
	}
	else {
		shakeCard(id);
		return start;
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

function startCard(card, animal) {

	card.id = animal.m_id;
	card.innerHTML = animal.m_icon;

	// console.log("start card");
	// card.classList.add('animated', 'flip');
	// card.addEventListener(
	// 	'animationend', 
	// 	function() { 
	// 		card.classList.remove('animated', 'flip');
			
	//  })

}

function startGame() {

	console.log("start game");

	// start timer
	start = true;
	countup = setInterval(setTime, 1000);

	// Shuffle the array
	shuffle(numbers);
	var elements = document.getElementsByClassName("card");
	var i;
	for (i = 0; i < elements.length; i++) {
		elements[i].classList.add("tilt");
		startCard(elements[i], zodiac[numbers[i]]);
	}
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

/***************************
PARTY POPPER
***************************/
/**
 * Creates a Mo.js party popper animation.
 *
 * @property {string}  selector - DOM selector to attach the animation to
 * @property {boolean} [debug]  - If enabled, add a debug timeline
 */

function partyPopper(selector, debug) {
	const colors = [
		'#bea4ff',
		'#feb535',
		'#ff6e83',
		'#58cafe',
	]

	const flight = {
		isSwirl: true,
		swirlSize: 'rand(10, 20)',
		swirlFrequency: 'rand(1, 3)',
		direction: [-1, 1],
		degreeShift: 'rand(-15, 15)',
		duration: 1200,
		easing: 'cubic.out',
		pathScale: 'stagger(.2)',
	}

	// Confetti shapes
	const torsade = {
		shape: 'zigzag',
		points: 'rand(4, 6)',
		radius: 40,
		radiusY: 30,
		strokeLinecap: 'round',
		strokeWidth: 8,
		fill: 'none',
		stroke: colors,
		angle: {0: 'rand(-720, 720)'},
		...flight,
	}

	const bent = {
		shape: 'curve',
		radius: 'rand(25, 35)',
		radiusY: 15,
		strokeLinecap: 'round',
		strokeWidth: 8,
		fill: 'none',
		stroke: colors,
		angle: {0: 'rand(-720, 720)'},
		...flight,
	}

	const flake = {
		shape:'circle',
		radius: 'rand(5, 10)',
		fill: colors,
		...flight,
	}

	// Bursts
	const burst = {
		parent: selector,
		radius: {0 : 'rand(50, 100)'},
		count: 'rand(18, 22)',
		degree: 30,
	}

	const torsadeBurst = new mojs.Burst({
		...burst,
		children: {
			...torsade,
		}
	});

	const bentBurst = new mojs.Burst({
		...burst,
		children: {
			...bent,
		}
	});

	const flakeBurst = new mojs.Burst({
		...burst,
		children: {
			...flake,
		}
	});

	// Timeline (debug only)
	if (debug != null) {
		const timeline = new mojs.Timeline;

		timeline.add(
			torsadeBurst, 
			bentBurst, 
			flakeBurst,
		);

		new MojsPlayer({
			add: timeline,
			isPlaying: true,
			isRepeat: true,
		});	
	} else {
		torsadeBurst.play()
		bentBurst.play()
		flakeBurst.play()
	}
};
