console.log('deploy script');
var request = require('request');
var fs = require('fs');

function readWriteSync() {
  var data = fs.readFileSync(__dirname + '/output.txt', 'utf-8');
  submitData(data);
}


function submitData(data) {


request.post(
    'https://hooks.zapier.com/hooks/catch/1988398/mmzf0m/',
    { json: { 'data': data } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
}

readWriteSync();
