const list_of_articles = [];
const contents = [];

const collate_articles = function(){
	document.querySelectorAll(`article`).forEach(function(element){
		list_of_articles.push(`${element.id}`);
		// Add this article's id and associated path to the contents array.
		this_article = {
			id: `${element.id}`,
			path: `/articles/${element.id}.html`,
			title: `${element.id}`
		};
		contents.push(this_article);
		console.log(contents);
		list_of_articles.forEach(function(item){
			// Place body of article within its <article> element.
			$.ajax(`/articles/${item}.html`).done(function(content){
				$(element).html(content);
			}).done(function(){
				// Insert anchor tags at start of articles.
				$(element).prepend(`
					<a id="#${element.id}"></a>
				`);
				// Add links to top and dividers at end of articles.
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
// DONE 3. Create a new <section> at the top of the <main> element with the id table_of_contents.
// 3. Within table_of_contents, create an <ul> in which each <li> is the contents of the first <h1> inside each article, in order.
// 4. Link each <li> to the #${element.id} of the corresponding entry in the array.

// IDEA: Create an object containing the id and verbose title of each article.
// 1. Initialize an empty object(?).
// 2. Loop over the <article> elements and insert the id values as the names of the object's properties, in order.
// 3. Load HTML into each of the <article> elements according to the values stored in the object.
// 4. After the HTML has been populated, loop over the <article> elements once more and gather the text within the first <h1> element inside each of them. This is the "verbose title" of the article. Insert these strings as the values of the object properties, in the same sequence. Now you have an object with each of the ids attached to its verbose title.
// 5. Build the table of contents from this object, using the verbose title as the text of a <li> and the id as the base of the link target for each <li>.

// STRUCTURE of `contents` ARRAY of OBJECTS
// contents[0] = {
// 	id = `id`,
// 	url = `url`,
// 	title = `title`
// }

// Q: What is the advantage of creating the object versus just looping over the contents and copying the values?
// What we want to accomplish is a way of structuring the data that:
// 1. Updates automatically when new content is created or altered (i.e., no manual copy-pasting of article titles and id strings).
// 2. Minimizes the amount of looping and parsing of JS on the front end.

// The problem is that you're contstructing the pages in the correct way, but serving them all wrong. You need to find a way to parse the JS on your side and then serve pre-generated content to the user.