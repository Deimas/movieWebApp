// const fs = require('fs');
// const path = require('path');
const url = require('url');


const omdb = require('../lib/moviedb');
const render = require('../lib/render');

function search(req, res) {
	const parsedUrl = url.parse(req.url, true);
	// console.log(parsedUrl.query);
	const title = parsedUrl.query.title;


	omdb.get(title, (error, movie) => {
		if (error) {
			return render(res, 'error.html', { error: error.message });
		}

		render(res, 'movie.html', movie);
	});

	// const stream = fs.createReadStream(path.join(__dirname,'..', 'public', 'movie.html'));

	// stream.pipe(res);
}

module.exports = search;