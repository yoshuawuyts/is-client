/**
 * Export
 */

exports = module.exports = detect;

/**
 * Check if process is running in the browser
 *
 * @return {Boolean}
 * @api public
 */

function detect() {
  if (typeof window != "undefined") return true;
  return false;
}