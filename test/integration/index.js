var strainer = require('../../lib/index');

var input = [
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'a'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'b'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'c'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'd'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'a'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'b'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'c'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'd'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'a'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'b'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'c'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'd'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'a'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'b'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'c'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'd'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'a'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'b'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'c'}}}},
    {'level1': {'level2': {'level3': {'foo': 'bar', 'a': 'd'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'a'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'b'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'c'}}}},
    {'level1': {'level2': {'level3': {'bar': 'foo', 'a': 'd'}}}},
];

var test = function (key, value) {
    if (key === 'a' && value === 'a') return true;
    if (key === 'a' && value === 'b') return true;
    if (key === 'a' && value === 'd') return true;
    return;
}

// console.time('benchmark');
// strainer(input, test, function (err, result) {
//     console.dir(err);
//     console.dir(result);
//     console.timeEnd('benchmark');
// });

console.time('benchmark');
strainer.match(input, 'a', 'd', function (err, result) {
    console.dir(err);
    console.dir(result);
    console.timeEnd('benchmark');
});