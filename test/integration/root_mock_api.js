var test        = require('tap').test,
    strainer    = require('../../lib/index');

var input       = require('../fixtures/mock_api.json');
strainer(input, function (key, value) {
    if (key === 'a' && value === 'a') return true;
    if (key === 'a' && value === 'b') return true;
    return;
}, function (err, result) {
    console.dir(err);
    console.dir(result);

    test('integration', function (t) {
        t.equal(err, null, 'error object should be null');
        t.equal(result.length, 12, 'result is of expected length');

        t.equal(result[0].level1.level2.level3.a, 'a', 'result includes expected value');
        t.equal(result[0].level1.level2.level3.foo, 'bar', 'result includes expected value');
        t.equal(result[11].level1.level2.level3.a, 'b', 'result includes expected value');
        t.equal(result[11].level1.level2.level3.bar, 'foo', 'result includes expected value');
        t.end();
    });
});