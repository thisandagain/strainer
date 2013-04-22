var test        = require('tap').test,
    fs          = require('fs'),
    strainer    = require('../../lib/index');

// Setup
var storage     = [];
var input       = fs.createReadStream(__dirname + '/../fixtures/mock_simple.json');
var tubes       = input.pipe(strainer({
    key:    'level1.level2.level3.a',
    value:  function (val) {
        return val === 'a';
    }
}));

// Stream handlers
tubes.on('data', function (data) {
    storage.push(JSON.parse(data)[0]);
});

tubes.on('end', function () {
    test('integration', function (t) {
        t.equal(storage.length, 6, 'result is of expected length');
        t.equal(storage[0].level1.level2.level3.a, 'a', 'result includes expected value');
        t.equal(storage[0].level1.level2.level3.foo, 'bar', 'result includes expected value');
        t.end();
    });
});