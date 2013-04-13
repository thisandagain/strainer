/**
 * Simple filtering of arrays and object streams.
 *
 * @package strainer
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
var parse   = require('jsonparse'),
    through = require('through');

/**
 * Fetches the value from an object using a JS-style key.
 *
 * @param {Object} Input
 * @param {String} Key path (e.g. "some.key[0].path")
 */
function fetch (obj, key) {
    var keys    = key.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.');
    var i       = 0;
    var n       = keys.length;

    while ((obj = obj[keys[i++]]) !== null && i < n) {}
    var value = i < n ? void 0 : obj;

    return value;
}

/**
 * Module.
 *
 * @param {Object}
 *      - key {String} String representation of the key path
 *      - value {Object, Function} Equality value or function to be used for evaluation
 *      - input {Array} Optional if used as stream
 *
 * @return {Array}
 */
module.exports = function (opts, callback) {
    var list = [];
    for (var i = 0; i < opts.input.length; i++) {
        var check = false;
        if (typeof opts.value === 'function') {
            check = opts.value(fetch(opts.input[i], opts.key));
        } else {
            check = fetch(opts.input[i], opts.key) === opts.value;
        }
        if (check) list.push(opts.input[i]);
    }
    callback(null, list);
};
