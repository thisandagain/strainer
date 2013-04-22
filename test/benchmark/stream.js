var test        = require('tap').test,
    fs          = require('fs'),
    strainer    = require('../../lib/index');

// Setup
console.time('bench');
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

tubes.on('end', function () {
    console.log('length: ' + storage.length);
    console.timeEnd('bench');
});