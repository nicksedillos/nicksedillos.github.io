$(document).ready(function(){
	$(`header`).load(`/header.html`);
	$(`footer`).load(`/footer.html`);
	// Load any article as determined by its ID.
	let articleIndex = $(`article`).attr(`id`);
	$(`article`).load(`/articles/${articleIndex}.html`);
});