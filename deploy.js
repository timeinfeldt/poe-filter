var fs = require('fs');

function readWriteSync() {
  var data = fs.readFileSync('output.txt', 'utf-8');
  console.log(data);
}

readWriteSync();
