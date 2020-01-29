const lightbox = document.getElementById(`lightbox`);

// Hide the lightbox.
function close_lightbox(){
	$(`#lightbox`).fadeOut(`fast`);
};

// Decrease the current_index_number by 1, then re-render lightbox.
function lightbox_previous(){
	current_lightbox_index = current_lightbox_index - 1;
	display_lightbox();
};

// Increase the current_index_number by 1, then re-render lightbox.
function lightbox_next(){
	current_lightbox_index = current_lightbox_index + 1;
	display_lightbox();
};

// Make the lightbox controls visible for one second, then hide them again.
function lightbox_wake_controls(){
	lightbox_controls.classList.remove(`hidden`);
	lightbox_controls.classList.add('visible');
	window.setTimeout(function(){
		lightbox_controls.classList.remove(`visible`);
		lightbox_controls.classList.add(`hidden`);
	}, 1000);
};

// Display the lightbox at the current_lightbox_index number. Show or hide arrow buttons depending on position in the sequence.
function display_lightbox(){
	const lightbox_background = document.getElementById(`lightbox_background`);
	const lightbox_caption_box = document.getElementById(`lightbox_caption_box`);
	const lightbox_image_box = document.getElementById(`lightbox_image_box`);
	const lightbox_previous_button = document.querySelector(`.previous_button`);
	const lightbox_next_button = document.querySelector(`.next_button`);
	// Wake the lightbox controls on click or mousemove.
	lightbox.addEventListener(`mousemove`, lightbox_wake_controls);
	lightbox.addEventListener(`mouseup`, lightbox_wake_controls);
	// Display the lightbox.
	$(`#lightbox`).fadeIn(`fast`);
	// Close the lightbox when user clicks on the background.
	lightbox_background.addEventListener(`mouseup`, close_lightbox);
	// Populate with the correct fullsize image.
	lightbox_image_box.innerHTML = `
		<img id="lightbox_current_image" src="${gallery_contents[current_lightbox_index].fullsize}">
	`;
	// Populate with the correct caption.
	lightbox_caption_box.innerHTML = `
		<p>${gallery_contents[current_lightbox_index].caption}</p>
	`;
	// Display a "previous" arrow button on all but the first image in the sequence.
	if (current_lightbox_index > 0){
		lightbox_previous_button.classList.remove(`absent`);
		lightbox_previous_button.classList.add(`present`);
	} else {
		lightbox_previous_button.classList.remove(`present`);
		lightbox_previous_button.classList.add(`absent`);
	};
	// Display a "next" arrow button on all but the last image in the sequence.
	if ((current_lightbox_index + 1) < gallery_contents.length){
		// lightbox_current_image.addEventListener(`mouseup`, event => {
		// 	console.log(`Click detected.`);
		// });
		lightbox_next_button.classList.remove(`absent`);
		lightbox_next_button.classList.add(`present`);
	} else {
		lightbox_next_button.classList.remove(`present`);
		lightbox_next_button.classList.add(`absent`);
	};
};

// Close the lightbox when Escape key is pressed.
$(document).keyup(function(keypress){
	if (keypress.key === "Escape"){
		close_lightbox();
	};
});

// Go to previous image when the left arrow key is pressed, unless already at the first image.
$(document).keyup(function(keypress){
	if ((keypress.key === "ArrowLeft") && (current_lightbox_index > 0)){
		lightbox_previous();
	};
});

// Go to next image when the right arrow key is pressed, unless already at the last image.
$(document).keyup(function(keypress){
	if ((keypress.key === "ArrowRight") && ((current_lightbox_index + 1) < gallery_contents.length)){
		lightbox_next();
	};
});

// Display the image gallery thumbnails with contents as defined by the gallery_contents array.
$(document).ready(function(){
	$(`div#lightbox`).load(`/templates/lightbox.html`);
	$.each(gallery_contents, function(index, value){
		$(`div#image_gallery`).append(`
			<img class="thumbnail" data-index="${index}"; src="${this.smallsize}" alt="${this.caption}">
		`);
	});
	$(`.thumbnail`).click(function(){
		current_lightbox_index = Number($(this).attr(`data-index`));
		display_lightbox(current_lightbox_index);
	});
});

// Add an event handler to #lightbox which detects the click target and executes controls as desired (via event delegation).
// Click/hover behaviors
//   - Close button (Appears on hover. Closes the lightbox.)
//   - Lightbox background (Closes the lightbox.)
//   - Previous button (Appears on hover, when not on first image. Goes to previous image.)
//   - Next button (Appears on hover, when not on last image. Goes to next image.)
//   - Main image (Same as Next button, except that on the final image it closes the lightbox.)
// PSEUDOCODE
// 1. Add an event handler to #lightbox for hovering.
//   a. Hover on prev/next/close buttons displays the controls.
// 2. Add an event handler to #lightbox for clicking.
//   a. Clicking anywhere displays the controls.
//   b. Clicking background or close button closes the lightbox.
//   c. Clicking previous goes to previous.
//   d. Clicking next goes to next.
//   e. If not on last, clicking main image goes to next.
//   f. If on the last image, clicking main image closes the lightbox.
// SAMPLE CODE
// // A click listener for a <ul> which identifies which of its <li>s was clicked.
// document.getElementById("parent-list").addEventListener("click", function(e) {
//   // If e.target (the clicked element) was a list item…
//   if(e.target && e.target.nodeName == "LI") {
//     // …log the list item’s ID.
//     console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
//   };
// });