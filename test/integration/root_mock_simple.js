var test        = require('tap').test,
    strainer    = require('../../lib/index');

var input       = require('../fixtures/mock_simple.json');
console.time('bench');
strainer({
    input:  input, 
    key:    'level1.level2.level3.a',
    value:  'a'
}, function (err, result) {
    console.timeEnd('bench');
    console.dir(err);
    console.dir(result);

    test('integration', function (t) {
        t.equal(err, null, 'error object should be null');
        t.equal(result.length, 6, 'result is of expected length');

        t.equal(result[0].level1.level2.level3.a, 'a', 'result includes expected value');
        t.equal(result[0].level1.level2.level3.foo, 'bar', 'result includes expected value');
        t.end();
    });
});