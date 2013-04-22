var strainer    = require('../../lib/index');
var input       = require('../fixtures/bench.json');

console.time('bench');
strainer({
    input:  input, 
    key:    'glossary.GlossDiv.GlossList.GlossEntry.ID', 
    value:  'GOOSE'
}, function (err, result) {
    if (err) console.dir(err);
    console.log('length: ' + result.length);
    console.timeEnd('bench');
});