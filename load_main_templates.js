const load_glyphs = function(){
	let glyph_index = $(`span.glyph`).attr(`data`);
	$(`span.glyph`).load(`/glyphs/${glyph_index}.svg`);
};

const load_articles = function(){
	document.querySelectorAll(`article`).forEach(function(element){
		$.ajax(`/articles/${element.id}.html`).done(function(content){
			$(element).html(content);
		}).done(function(){
			$(element).prepend(`
				<a id="#${element.id}"></a>
			`);
			$(element).append(`
				<p><a class="link_to_top" href=".">^</a></p>
				<svg class="glyph" data="divider">
			`);
		}).done(load_glyphs());
	});
};

// Load templates when called in the document.
$(document).ready(function(){
	$(`template#head`).load(`/templates/head.html`);
	$(`header`).load(`/templates/header.html`);
	$(`footer`).load(`/templates/footer.html`);
	// Load each article by its ID, then prepend an anchor link and append a link to reload the page (i.e., the top)and a divider.
	load_articles();
});