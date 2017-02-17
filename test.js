var fs = require('fs');

function readWriteSync() {
  var newValue = 'NEW VALUE';

  fs.writeFileSync('./output.txt', newValue, 'utf-8');

  console.log('readFileSync complete');
}

readWriteSync();
