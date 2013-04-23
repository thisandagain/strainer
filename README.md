## strainer
#### Simple filtering of arrays and object streams.

### Installation
```bash
npm install strainer
```

### Basic Use (Stream)
```json
[
    {"bar": "foo"},
    {"foo": "bar"}
]
```

```javascript
var strainer    = require('strainer');
var input       = require('fs').createReadStream('/some/array.json');

input.pipe(strainer({
    key:    'foo',
    value:  'bar'
})).pipe(process.stdout);
```

### Basic Use (Array / Callback)
```javascript
var strainer    = require('strainer');
var input       = [{'bar':'foo'}, {'foo':'bar'}];

strainer({
    input:  someArray,
    key:    'foo',
    value:  'bar'
}, function (err, result) {
    // Yay!
});
```

### Using Functions as Values
If a function is provided as the "value" attribute, it will be used as a subroutine to evaluate each object. For example:
```javascript
var strainer    = require('strainer');
var someArray   = [{foo: 1}, {foo: 2}, {foo: 3}, {foo: 4}];

strainer({
    input:  someArray,
    key:    'foo',
    value:  function (val) {
        return val > 2;
    }
}, function (err, result) {
    // [{foo: 3}, {foo: 4}]
});
```

### Selectors
Strainer supports the use of JS-style object selectors. For example, let's say you had a complex object:
```json
[
    {
        "level1": {
            "id": "something",
            "stuff": []
        },
        "level2": {
            "id": "somethingElse",
            "stuff": [
                {
                    "prop": true
                },
                {
                    "prop": false
                }
            ]
        }
    }
]
```

Here, you could use a selector to filter out a property that is buried deep within each object:
```javascript
var strainer    = require('strainer');
var input       = require('fs').createReadStream('/some/array.json');

input.pipe(strainer({
    key:    'level2.stuff[0].prop',
    value:  true
})).pipe(process.stdout);
```

### Testing
```bash
npm test
```

### Benchmarks (Warning: naïve)
```bash
make benchmark
```