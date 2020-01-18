const list_of_articles = [];
const contents = {

}

const collate_articles = function(){
	document.querySelectorAll(`article`).forEach(function(element){
		list_of_articles.push(`${element.id}`);
		list_of_articles.forEach(function(item){
			$.ajax(`/articles/${item}.html`).done(function(content){
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
	});
};

const build_table_of_contents = function(){
	list_of_articles.forEach(function(item){
		table_of_contents = document.querySelector(`ul#table_of_contents`);
		$(table_of_contents).append(`
			<li><a href="#${item}">${item}</a></li>
		`);
	});
};

// Load templates when called in the document.
$(document).ready(function(){
	$(`template#head`).load(`/templates/head.html`);
	$(`header`).load(`/templates/header.html`);
	$(`footer`).load(`/templates/footer.html`);
	collate_articles();
	build_table_of_contents();
});

// Assemble a table of contents from the articles present on a given page.
// DONE 1. In load_articles(), after looping over the <article> elements and collecting their id attributes, assemble the ids into an array.
// DONE 2. Populate the <article> elements as before.
// 3. Create a new <article> at the top of the <main> element with the id table_of_contents.
// 3. Within table_of_contents, create an <ul> in which each <li> is the contents of the first <h1> inside each article, in order.
// 4. Link each <li> to the #${element.id} of the corresponding entry in the array.

// IDEA: Create an object containing the id and verbose title of each article.
// 1. Initialize an empty object(?).
// 2. Loop over the <article> elements and insert the id values as the names of the object's properties, in order.
// 3. Load HTML into each of the <article> elements according to the values stored in the object.
// 4. After the HTML has been populated, loop over the <article> elements once more and gather the text within the first <h1> element inside each of them. This is the "verbose title" of the article. Insert these strings as the values of the object properties, in the same sequence. Now you have an object with each of the ids attached to its verbose title.
// 5. Build the table of contents from this object, using the verbose title as the text of a <li> and the id as the base of the link target for each <li>.