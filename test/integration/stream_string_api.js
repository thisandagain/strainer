var test        = require('tap').test,
    fs          = require('fs'),
    strainer    = require('../../lib/index');

// Setup
var storage     = [];
var input       = fs.createReadStream(__dirname + '/../fixtures/mock_api.json');
var tubes       = input.pipe(strainer({
    key:    'pole',
    value:  'farmer'
}));

// Stream handlers
tubes.on('data', function (data) {
    storage.push(JSON.parse(data)[0]);
});

tubes.on('end', function () {
    test('integration', function (t) {
        t.equal(storage.length, 5, 'result is of expected length');
        t.end();
    });
});