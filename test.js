var fs = require('fs');

function readWriteSync() {
  var newValue = 'NEW VALUE';

  fs.writeFileSync(__dirname + '/output.txt', newValue, 'utf-8');

  console.log('readFileSync complete');
}

readWriteSync();
