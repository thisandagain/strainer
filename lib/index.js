/**
 * Simple filtering of arrays and object streams.
 *
 * @package strainer
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
var es          = require('event-stream'),
    json        = require('JSONStream');

var filter      = require('./filter');

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
module.exports = function (o, callback) {
    // Callback pattern handler
    if (typeof o.input === 'object') {
        return filter(o.input, o.key, o.value, callback);    
    }
    
    // Stream handler
    return es.pipeline(
        json.parse('*'),
        es.map(function (data, callback) {
            filter([data], o.key, o.value, callback);
        }),
        es.stringify()
    );
};