// Load templates when called in the document.
$(document).ready(function(){
	$(`template#head`).load(`/templates/head.html`);
	$(`header`).load(`/templates/header.html`);
	$(`footer`).load(`/templates/footer.html`);
	// Load each article by its ID.
	let articleIndex = $(`article`).attr(`id`);
	$(`article`).load(`/articles/${articleIndex}.html`);
});