/**
 * Utilities for formatting not able to be handled by CSS.
 * @namespace
 */
FormatUtils = {
	/**
	* Formats a given number as dollars.
	* @param {number} n The number to format.
	* @see https://css-tricks.com/snippets/javascript/format-currency/
	* @see http://stackoverflow.com/a/14428340
	* @function formatCurrency
	* @memberof FormatUtils
	*/
	formatCurrency: function(n) {
		n=parseFloat(n);
		return isNaN(n)?n:'$' + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	}

}