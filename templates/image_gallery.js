const lightbox = document.getElementById(`lightbox`);

// Hide the lightbox.
const close_lightbox = function(){
	$(`#lightbox`).fadeOut(`fast`);
};

// Decrease the current_index_number by 1, then re-render lightbox.
const lightbox_previous = function(){
	current_lightbox_index = current_lightbox_index - 1;
	display_lightbox();
};

// Increase the current_index_number by 1, then re-render lightbox.
const lightbox_next = function(){
	current_lightbox_index = current_lightbox_index + 1;
	display_lightbox();
};

// Display the lightbox at the current_lightbox_index number. Show or hide arrow buttons depending on position in the sequence.
const display_lightbox = function(){
	const lightbox_background = document.getElementById(`lightbox_background`);
	// Display the lightbox.
	$(`#lightbox`).fadeIn(`fast`);
	// Close the lightbox when user clicks on the background.
	lightbox_background.addEventListener(`mouseup`, event => {
		close_lightbox();
	});
	// Populate with the correct fullsize image.
	$(`#lightbox_image_box`).html(`
		<img src="${gallery_contents[current_lightbox_index].fullsize}">
	`);
	// Populate with the correct caption.
	$(`#lightbox_caption_box`).html(`
		<p>${gallery_contents[current_lightbox_index].caption}</p>
	`);
	// Display a "previous" arrow button on all but the first image in the sequence.
	if (current_lightbox_index > 0){
		$(`.previous_button`).css(`display`, `block`);
	} else {
		$(`.previous_button`).css(`display`, `none`);
	};
	// Display a "next" arrow button on all but the last image in the sequence.
	if ((current_lightbox_index + 1) < gallery_contents.length){
		$(`.next_button`).css(`display`, `block`);
	} else {
		$(`.next_button`).css(`display`, `none`);
	};
	const lightbox_controls = document.getElementById(`lightbox_controls`);
	// Make the lightbox controls visible for two seconds when the mouse moves over the lightbox.
	lightbox.addEventListener(`mousemove`, event => {
		lightbox_controls.classList.remove(`hidden`);
		lightbox_controls.classList.add('visible');
		window.setTimeout(function(){
			lightbox_controls.classList.remove(`visible`);
			lightbox_controls.classList.add(`hidden`);
		}, 1000);
	});
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