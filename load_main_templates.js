const load_articles = function(){
	document.querySelectorAll(`article`).forEach(function(element){
		$.ajax(`/articles/${element.id}.html`).done(function(content){
			$(element).html(content);
		}).done(function(){
			// Anchor tags at start of articles
			$(element).prepend(`
				<a id="#${element.id}"></a>
			`);
			// Links to top and dividers at end of articles
			$(element).append(`
				<p><a class="link_to_top" href=".">^</a></p>
				<svg class="icon">
					<use href="/icons.svg#divider"/>
				</svg>
			`);
		});
	});
};

// Load templates when called in the document.
$(document).ready(function(){
	$(`template#head`).load(`/templates/head.html`);
	$(`header`).load(`/templates/header.html`);
	$(`footer`).load(`/templates/footer.html`);
	load_articles();
});