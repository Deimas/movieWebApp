const fs = require('fs');
const path = require('path');

function render(res, templateName, data) {
	fs.readFile(path.resolve('views', templateName), 'utf-8', (error, template) => {
		if (error) {
			res.writeHead(500, { 'Content-Type': 'text/plain'});
			return res.end(error.message);
		}

		let html = template;

		if (data) {
			html = template.replace(/{{([^{}]*)}}/g, (placeholder, property) => {
				const match = eval("data" + '.' + property);
				console.log(match);
				return match || placeholder;
			});
		}

		res.writeHead(500, { 'Content-Type': 'text/html'});
		res.end(html);
	});
};

module.exports = render;