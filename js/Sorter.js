/**
 * Sorts objects by a given parameter in a given order.
 * @namespace
 */
var Sorter = {

	/** 
	* Constant to use when wanting to sort in ascending order.
	* @constant
	* @memberof Sorter
	*/
	ASCENDING: "ascending",
	/** 
	* Constant to use when wanting to sort in descending order.
	* @constant
	* @memberof Sorter
	*/
	DESCENDING: "descending",
	/**
	* Sorts the data.
	* @param {array} data An array of Objects to sort.
	* @param {string} param The param to compare between the objects in data.
	* @param {string} [order] The order in which the data objects should be returned. Should use Sorter.ascending or Sorter.descending.
	* @function sort
	* @memberof Sorter
	*/
	sort: function (data, param, order) {
		
		var sortedData = data;
		var sortDirection = order;

		if (order == undefined) {
			sortDirection = Sorter.DESCENDING;
		}

		function compare(a,b) {
			if (a[param] > b[param]) {
				return -1;
			}
			if (a[param] <= b[param]) {
				return 1;
			}
			return -1;
		}

		sortedData.sort(compare);
		
		if (sortDirection == Sorter.ASCENDING) {
			sortedData.reverse();
		}

		return sortedData;
	}

}

// export for testing
if (typeof module !== 'undefined' && module.exports != null) {
    exports.ASCENDING = Sorter.ASCENDING;
    exports.DESCENDING = Sorter.DESCENDING;
    exports.sort = Sorter.sort;
}