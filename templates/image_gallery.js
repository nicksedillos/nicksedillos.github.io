// Hide the lightbox.
const close_lightbox = function(){
	document.getElementById("lightbox").style.display = "none";
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
	document.getElementById("lightbox").style.display = "block";
	$(`#lightbox_image_box`).html(`
		<img src="${gallery_contents[current_lightbox_index].fullsize}">
	`);
	$(`#lightbox_caption_box`).html(`
		<p>${gallery_contents[current_lightbox_index].caption}</p>
	`);
	if (current_lightbox_index > 0){
		$(`.previous_button`).css(`display`, `block`);
	} else {
		$(`.previous_button`).css(`display`, `none`);
	};
	if ((current_lightbox_index + 1) < gallery_contents.length){
		$(`.next_button`).css(`display`, `block`);
	} else {
		$(`.next_button`).css(`display`, `none`);
	};
};

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