// See: https://www.w3schools.com/howto/howto_js_lightbox.asp
// const lightbox = `
// 	<div id="lightbox">
// 		<span class="close_button">×</span><img src=${gallery_contents[1].fullsize}>
// 		<div class="lightbox_caption">
// 			<p>${gallery_contents[1].caption}</p>
// 		</div>
// 	</div>
// `;

const open_lightbox = function (){
	document.getElementById("lightbox").style.display = "block";
};

const close_lightbox = function(){
	document.getElementById("lightbox").style.display = "none";
}

// Use the gallery_contents object to assemble a set of thumbnails, each of which opens a lightbox modal when clicked. Not finished.
$(document).ready(function(){
	$.each(gallery_contents, function(index, value){
		$(`div#image_gallery`).append(`
			<img class="thumbnail" src="${this.smallsize}" alt="${this.caption}">
		`);
		$(`.close_button`).click(close_lightbox);
	});
});