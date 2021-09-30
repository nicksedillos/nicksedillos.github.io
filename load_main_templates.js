const articles = [];

function collate_articles(){
	document.querySelectorAll(`article`).forEach(function(element){
		const next_article = {
			id: (`${element.id}`),
			title: (`${element.title}`)
		};
		articles.push(next_article);
		articles.forEach(function(article){
			// Place body of article within its <article> element.
			$.ajax(`/articles/${article.id}.html`).done(function(content){
				$(element).html(content);
			}).done(function(){
				// Insert anchor tags at start of articles.
				$(element).prepend(`
					<a id="#${element.id}"></a>
				`);
				// Add links to top and dividers at end of articles.
				$(element).append(`
					<p><a class="link_to_top" href=".">^</a></p>
					<svg class="icon divider">
						<use href="/icons.svg#divider"/>
					</svg>
				`);
			});
		});
	});
};

function build_table_of_contents(){
	// Assemble the ToC from the gathered data.
	articles.forEach(function(article){
		table_of_contents = document.querySelector(`ul#table_of_contents`);
		$(table_of_contents).append(`
			<li><a href="#${article.id}">${article.title}</a></li>
		`);
	});
	$(table_of_contents).append(`
		<svg class="icon divider">
			<use href="/icons.svg#divider"/>
		</svg>
	`);
};

// Load templates when called in the document.
$(document).ready(function(){
	$(`template#head`).load(`/templates/head.html`);
	$(`header`).load(`/templates/header.html`);
	$(`footer`).load(`/templates/footer.html`);
	collate_articles();
	build_table_of_contents();
});