// Load templates when called in the document.
$(document).ready(function(){
	$(`template#head`).load(`/templates/head.html`);
	$(`header`).load(`/templates/header.html`);
	$(`footer`).load(`/templates/footer.html`);
	// Load each article by its ID, then prepend an anchor link and append a link to reload the page (i.e., the top)and a divider.
	document.querySelectorAll(`article`).forEach(function(element){
		$.ajax(`/articles/${element.id}.html`).done(function(content){
			$(element).html(content);
		}).done(function(){
			$(element).prepend(`
				<a id="#${element.id}"></a>
			`);
			$(element).append(`
				<p><a href=".">^</a></p>
				<p class="centered">⁂</p>
			`);
		});
	});
});