console.time('bench');
var fs          = require('fs'),
    strainer    = require('../../lib/index');

// Setup
var storage     = [];
var input       = fs.createReadStream(__dirname + '/../fixtures/bench.json');
var tubes       = input.pipe(strainer({
    key:    'glossary.GlossDiv.GlossList.GlossEntry.ID',
    value:  'GOOSE'
}));

// Stream handlers
tubes.on('data', function (data) {
    storage.push(JSON.parse(data)[0]);
});

tubes.on('error', function (err) {
    console.dir(err);
});

tubes.on('end', function () {
    console.timeEnd('bench');
    console.dir(process.memoryUsage());
});