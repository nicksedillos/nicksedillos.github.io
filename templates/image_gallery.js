const lightboxModal = `
	<div class="lightbox">
		<span class="close_button">×</span><img src="${gallery_contents.fullsize}">
		<div class="lightbox_caption">
			<p>${gallery_contents.caption}</p>
		</div>
	</div>
`;

// Use the gallery_contents object to assemble a set of thumbnails, each of which opens a lightbox modal when clicked. Not finished.
$(document).ready(function(){
	$.each(gallery_contents, function(index, value){
		$(`div#image_gallery`).append(`
			<a href="${this.fullsize}"><img class="thumbnail" src="${this.smallsize}" alt="${this.caption}"></a>
		`);
	});
});