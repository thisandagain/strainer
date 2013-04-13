var strainer    = require('../../lib/index');
var input       = require('../fixtures/bench.json');

console.time('bench');
strainer(input, function (key, value) {
    if (key === 'ID' && value === 'GOOSE') return true;
    return;
}, function (err, result) {
    if (err) console.dir(err);
    console.log('length: ' + result.length);
    console.timeEnd('bench');
});