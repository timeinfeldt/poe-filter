var fs = require('fs');

function readWriteSync() {
  var data = fs.readFileSync('output.txt', 'utf-8');

  console.log('data is: ' + data);

  var newValue = 'new value';

  fs.writeFileSync('output.txt', newValue, 'utf-8');

  console.log('readFileSync complete');
}
readWriteSync();
