## strainer
#### Use simple equality tests to filter streams and arrays of objects.

### Installation
```bash
npm install strainer
```

### Basic Use (Stream)
```javascript
var strainer    = require('strainer');
var input       = require('fs').createReadStream('/some/array.json');

input.pipe(strainer(function (k, v) {
    if (key === k && value === v) return true;
    return;
}).pipe(process.stdout);
```

### Basic Use (Array / Callback)
```javascript
var strainer    = require('strainer');
var input       = [];

strainer(input, function (k, v) {
    if (key === k && value === v) return true;
    return;
}, function (err, result) {
    // 
});
```