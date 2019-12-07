$(document).ready(function(){
	$.each(gallery_contents, function(i, val) {
		$(`div.image_gallery`).html(`
			<img src=$(filename)>
		`);
	}
});