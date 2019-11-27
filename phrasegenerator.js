const phrases = [
	'Hello there!',
	'Eat my shorts',
	'UPPER TEXT'
]

function generate_phrases(phrases){
	return phrases[Math.floor(Math.random()*phrases.length)];
}