const phrases = [
	`Hello there!`,
	`You have a chance to get in on the ground floor of this thing`,
	`UPPER TEXT`,
	`Find the seven clues and you could win a trip for four to Fairyland Park in Marble, Minnesota*`,
	`All of this has happened before, and will happen again`,
	`But if that's true, then…`,
	`Did that John Turturro <em>Jesus</em> movie ever actually come out?`,
	`Look Jabba, even I get boarded sometimes.`,
	`You can't afford NOT to invest in this`,
	`There are so many ways to misinterpret this.`,
	`This is going to get old after a while`,
	`Maybe, but…maybe YES`,
	`Congratulations! You just won FREE iPAD`,
	`CRACKLE! SIZZLE! POP! THAT'S ENGAGEMENT BABY`,
	`Keep reloading to discover the date on which you will die`,
	`VIDYA GAMES`,
	`We are connected now`,
	`Are you going to listen to me or some guy who never even cast a stone before`,
	`YOU ARE INFECTED WITH [248] VIRUS! Click Here for Diagnostic Scan`,
	`Gooble gobble`,
	`We've almost made it to our funding goal`,
	`I've got an idea. How about NO`,
	`WELCOME TO FACEBoOK`,
	`What'cha thinkin' 'bout?`,
	`Face down, ass up, that's the way we SEO`,
	`Hey buddy, I don't like it either`,
	`I mean, I get what you're saying`,
	`666 FORBIDDEN`
];

const random_index = Math.floor(Math.random()*phrases.length);

const selected_phrase = phrases[random_index];

$(document).ready(function(){
	$('header').load('header.html', function(){
		$('#random_phrase').html(`${selected_phrase}`);
	});
	$('footer').load('footer.html');
});