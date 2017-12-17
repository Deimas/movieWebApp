const fs = require('fs');
const path = require('path');
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    host: [
        {
          host: 'localhost',
          auth: 'admin:password',
          protocol: 'https',
          port: 9220
        }
      ],
      ssl: {
          ca: fs.readFileSync(path.resolve('pki', 'ca.pem')),
          rejectUnauthorized: true
      }
});


function esrequest(findedData) {
    client.create({
        index: 'other',
        type: 'other',
        id: findedData.data.name,
        body: findedData,
      }, function (error, response) {
        if (error) {
            console.log(error);
        }

        return console.log(response);
      });
}

module.exports = esrequest;