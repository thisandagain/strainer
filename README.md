## strainer
#### Simple filtering of arrays and object streams.

### Installation
```bash
npm install strainer
```

### Basic Use (Stream)
```json
[
    {},
    {}
]
```

```javascript
var strainer    = require('strainer');
var input       = require('fs').createReadStream('/some/array.json');

input.pipe(strainer({
    key:    'foo',
    value:  'bar'
}).pipe(process.stdout);
```

### Basic Use (Array / Callback)
```javascript
var strainer    = require('strainer');
var input       = [];

strainer({
    input:  someArray,
    key:    'foo',
    value:  'bar'
}, function (err, result) {
    // 
});
```

### "Deep" Keys
Keys follow JS idioms and can get pretty ridiculous if you need them to:
```javascript

```

### Using functions as values
If a function is provided as the "value" attribute, it will be used as a subroutine to evaluate each object. For example:
```javascript
var strainer    = require('strainer');
var someArray   = [{foo: {bar: 1}}, {foo: {bar: 2}}, {foo: {bar: 3}}, {foo: {bar: 4}}];

strainer({
    input:  someArray,
    key:    'foo.bar',
    value:  function (val) {
        return val > 2;
    }
}, function (err, result) {
    // [{foo: {bar: 3}}, {foo: {bar: 4}}]
});
```

This affords the use of other modules to aid in evaluating the filter. Here's an example using the [deep-equal]() module:
```javascript
var deep        = require('deep-equal'),
    strainer    = require('strainer');
var someArray   = [{foo: {bar: 1}}, {foo: {bar: 2}}, {foo: {bar: 3}}, {foo: {bar: 4}}];

strainer({
    input:  someArray,
    key:    'foo.bar',
    value:  function (val) {
        return deep(val, {bar: 1});
    }
}, function (err, result) {
    // [{foo: {bar: 3}}, {foo: {bar: 4}}]
});
```