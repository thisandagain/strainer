/**
 * Simple tools for filtering arrays and object streams.
 *
 * @package strainer
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Fetches the value from an object using a JS-style "deep" key.
 *
 * @param {Object} Input
 * @param {String} Key path
 */
function fetch (obj, key) {
    var keys    = key.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.'),
        i       = 0,
        n       = keys.length;

    while ((obj = obj[keys[i++]]) !== null && i < n) {}
    value = i < n ? void 0 : obj;

    return value;
}

/**
 * Export
 */
module.exports = function (opts, callback) {
    // Filter the input
    var list = [];
    for (var i = 0; i < opts.input.length; i++) {
        var check = fetch(opts.input[i], opts.key) == opts.value;
        if (check) list.push(opts.input[i]);
    }
    callback(null, list);
};