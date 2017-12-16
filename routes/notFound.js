const render = require('../lib/render');


function notFound(req, res) {
	render(res, 'error.html', { error: 'Не найдено' });
}

module.exports = notFound;