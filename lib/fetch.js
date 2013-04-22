/**
 * Object fetch using JS-style keys.
 *
 * @package strainer
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Export.
 *
 * @param {Object} Input
 * @param {String} Key path (e.g. "some.key[0].path")
 */
module.exports = function (obj, key) {
    var keys    = key.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.');
    var i       = 0;
    var n       = keys.length;

    while ((obj = obj[keys[i++]]) !== null && i < n) {}
    var value = i < n ? void 0 : obj;

    return value;
};