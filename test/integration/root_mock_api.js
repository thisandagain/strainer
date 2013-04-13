var test        = require('tap').test,
    strainer    = require('../../lib/index');

var input       = require('../fixtures/mock_api.json');
strainer(input, function (key, value) {
    if (key === 'pole' && value === 'farmer') return true;
    return;
}, function (err, result) {
    console.dir(err);
    console.dir(result);

    test('integration', function (t) {
        t.equal(err, null, 'error object should be null');
        t.equal(result.length, 5, 'result is of expected length');
        t.end();
    });
});