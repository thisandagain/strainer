/**
 * Use simple equality tests to filter streams and arrays of objects.
 *
 * @package strainer
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
var async       = require('async'),
    traverse    = require('traverse');

/**
 * Constructor
 *
 * @param {Array} Array to be filtered
 * @param {Function} Test
 *      - {String} Key
 *      - {Object} Value (string, number, etc.)
 *
 * @return {Array}
 */
var strainer = function (input, test, callback) {
    // Parse arguments
    if (typeof input !== 'object') return callback('Input must be an object.');
    if (input.length === 'undefined') return callback('Input must be an array');
    if (typeof test !== 'function') test = function () { return true; };
    
    // Filter the input
    async.filter(input, function (obj, callback) {
        traverse(obj).forEach(function (x) {
            if (test(this.key, x)) return callback(true);
        });

        process.nextTick(function () {
            callback(false);
        });
    }, function (result) {
        callback(null, result);
    });
};

strainer.match = function (input, key, value, callback) {
    strainer(input, function (k, v) {
        if (key !== k) return;
        if (key === k && value === v) return true;
        return;
    }, callback);
};

strainer.contains = function (input, key, callback) {
    strainer(input, function (k) {
        if (key === k) return true;
        return;
    }, callback);
}

/**
 * Export
 */
module.exports = strainer;