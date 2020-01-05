// Load templates when called in the document.
$(document).ready(function(){
	$(`template#head`).load(`/templates/head.html`);
	$(`header`).load(`/templates/header.html`);
	$(`footer`).load(`/templates/footer.html`);
	// Load each article by its ID.
	document.querySelectorAll(`article`).forEach(function(element){
		$(element).load(`/articles/${element.id}.html`);
	});
});