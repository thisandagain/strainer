/**
 * Simple filter operation handler.
 *
 * @package strainer
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var fetch   = require('./fetch');

/**
 * Export
 *
 * @param {Array} Input array.
 * @param {String} Key in string format
 * @param {String, Number, Function} Value for evaluation
 *
 * @return {Array}
 */
module.exports = function (input, key, value, callback) {
    var list = [];
    for (var i = 0; i < input.length; i++) {
        var check = false;
        if (typeof value === 'function') {
            check = value(fetch(input[i], key));
        } else {
            check = fetch(input[i], key) === value;
        }
        if (check) list.push(input[i]);
    }

    if (list.length === 0) return callback(null);
    callback(null, list);
};