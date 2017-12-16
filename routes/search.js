const url = require('url');

const omdb = require('../lib/moviedb');

function search(req, res) {
	const parsedUrl = url.parse(req.url, true);
	const title = parsedUrl.query.title;


	omdb.get(title, (error, movie) => {
		if (error) {
			return res.render('error.html', { error: error.message });
		}

		res.render('movie.html', movie);
	});

	// const stream = fs.createReadStream(path.join(__dirname,'..', 'public', 'movie.html'));

	// stream.pipe(res);
}

module.exports = search;