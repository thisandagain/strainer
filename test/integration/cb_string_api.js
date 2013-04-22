var test        = require('tap').test,
    strainer    = require('../../lib/index');

var input       = require('../fixtures/mock_api.json');
console.time('bench');
strainer({
    input:  input,
    key:    'pole',
    value:  'farmer'
}, function (err, result) {
    console.timeEnd('bench');
    console.dir(err);
    console.dir(result);

    test('integration', function (t) {
        t.equal(err, null, 'error object should be null');
        t.equal(result.length, 5, 'result is of expected length');
        t.end();
    });
});