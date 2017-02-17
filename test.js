var fs = require('fs');

function readWriteSync() {

  var newValue = 'new value';

  fs.writeFileSync('./output.txt', newValue, 'utf-8');

  console.log('readFileSync complete');
}
readWriteSync();
