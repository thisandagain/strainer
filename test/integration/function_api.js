var test        = require('tap').test,
    strainer    = require('../../lib/index');

var input       = require('../fixtures/mock_api.json');
console.time('bench');
strainer({
    input:  input,
    key:    'stats.challenges',
    value:  function (val) {
        return val > 10;
    }
}, function (err, result) {
    console.timeEnd('bench');
    console.dir(err);
    console.dir(result);

    test('integration', function (t) {
        t.equal(err, null, 'error object should be null');
        t.equal(result.length, 7, 'result is of expected length');
        t.end();
    });
});