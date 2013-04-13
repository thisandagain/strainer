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
 * Callback interface.
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
        var flag = false;
        traverse(obj).forEach(function (x) {
            if (test(this.key, x)) flag = true;
        });
        callback(flag);
    }, function (result) {
        callback(null, result);
    });
};

/**
 * Export
 */
module.exports = strainer;