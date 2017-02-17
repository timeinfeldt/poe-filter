var fs = require('fs');

function readWriteSync() {
  fs.writeFileSync('./output.txt', newValue, 'utf-8');

  console.log('readFileSync complete');
}

readWriteSync();
