console.log('deploy script');
var request = require('request');
var fs = require('fs');

function readWriteSync() {
  var data = fs.readFileSync(__dirname + '/output.txt', 'utf-8');
  submitData();
}


function submitData() {


request.post(
    'https://hooks.zapier.com/hooks/catch/1988398/mmzf0m/',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
}

readWriteSync();