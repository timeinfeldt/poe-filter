console.log('deploy script');

var fs = require('fs');

function readWriteSync() {
  var data = fs.readFileSync(__dirname + '/output.txt', 'utf-8');
  console.log(data);
}

readWriteSync();
