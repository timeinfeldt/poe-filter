var fs = require('fs');

function readWriteSync() {
  var data = fs.readFileSync('./output.txt', 'utf-8');

  var newValue = 'KEK';

  fs.writeFileSync('filelistSync.txt', newValue, 'utf-8');

  console.log('readFileSync complete');
}

readWriteSync();
