$(document).ready(function(){
	$(`header`).load(`/header.html`);
	$(`footer`).load(`/footer.html`);
	// Load a blog entry as determined by its ID.
	let blogIndex = $(`article`).attr(`id`);
	$(`article`).load(`/blog/blog_${blogIndex}.html`);
});