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
			return render('error.html', { error: error.message }, (error, html) => {
				if (error) {
					res.writeHead(500, { 'Content-Type': 'text/plain'});
					return res.end(error.message);
				}

				res. statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				res.end(html);
			});
		}

		render('movie.html', movie, (error, html) => {
			if (error) {
				res.writeHead(500, { 'Content-Type': 'text/plain'});
				return res.end(error.message);
			}

			res. statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(html);
		});
	});

	// const stream = fs.createReadStream(path.join(__dirname,'..', 'public', 'movie.html'));

	// stream.pipe(res);
}

module.exports = search;