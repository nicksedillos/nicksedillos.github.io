const close_lightbox = function(){
	document.getElementById("lightbox").style.display = "none";
};

const open_lightbox = function(index){
	document.getElementById("lightbox").style.display = "block";
	$(`.close_button`).click(close_lightbox);
	$(`#lightbox_image_box`).html(`
		<img src="${gallery_contents[index].fullsize}">
	`);
	$(`#lightbox_caption_box`).html(`
		<p>${gallery_contents[index].caption}</p>
	`)
};

$(document).ready(function(){
	$(`div#lightbox`).load(`/templates/modals/lightbox.html`);
	$.each(gallery_contents, function(index, value){
		$(`div#image_gallery`).append(`
			<img class="thumbnail" onclick="open_lightbox(${index})" src="${this.smallsize}" alt="${this.caption}">
		`);
	});
});