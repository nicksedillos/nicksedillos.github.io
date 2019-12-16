const open_lightbox = function (){
	document.getElementById("lightbox").style.display = "block";
};

const close_lightbox = function(){
	document.getElementById("lightbox").style.display = "none";
}

// Use the gallery_contents object to assemble a set of thumbnails, each of which opens a lightbox modal when clicked. Not finished.
$(document).ready(function(){
	$(`div#lightbox`).load(`/templates/modals/lightbox.html`);
	$.each(gallery_contents, function(index, value){
		$(`div#image_gallery`).append(`
			<img class="thumbnail" src="${this.smallsize}" alt="${this.caption}">
		`);
		$(`.close_button`).click(close_lightbox);
	});
});