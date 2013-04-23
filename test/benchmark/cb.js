console.time('bench');
var strainer    = require('../../lib/index');
var input       = require('../fixtures/bench.json');

strainer({
    input:  input, 
    key:    'glossary.GlossDiv.GlossList.GlossEntry.ID', 
    value:  'GOOSE'
}, function (err, result) {
    if (err) console.dir(err);
    console.timeEnd('bench');
    console.dir(process.memoryUsage());
});