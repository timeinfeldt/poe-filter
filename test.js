var fs = require('fs');
fs.writeFile("./output.txt", "kek", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
