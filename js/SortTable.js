/**
* Constructs a table with sortable rows. All rows will sort in descending order based on the most recent column header clicked.
* @param {HTMLDivElement} element The DOM element that the PolicyTable should be appended to.
* @param {array} data An array of data objects.
* @constructor
*/
function SortTable(element, data) {

	this.policyData;

	this.tableElement;
	this.headerRowElement;

	this.sortOrder = {};
}

/**
* Creates the table and appends it to the given DOM element.
* @param {HTMLDivElement} element The DOM element that the PolicyTable should be appended to.
* @param {array} data An array of data objects.
* @function init
* @private
* @memberof SortTable
*/
SortTable.prototype.init = function(element, data) {

	// make our own copy of the data that we can add more to
	this.policyData = JSON.parse(JSON.stringify(data));

	// create the table
	this.tableElement = document.createElement("table");
	tableRowElements = [];

	// create the header row
	this.headerRowElement = document.createElement("tr");

	for (var param in data[0]) {
		var column = document.createElement("th");
		column.innerHTML = param;

		// add click listener to sort on a particular column
		(function(e, p, s) {
			e.addEventListener("click", function() {
				s.sortOn(p);
			});
		})(column, param, this);

		this.headerRowElement.appendChild(column);
	}
	this.tableElement.appendChild(this.headerRowElement);

	// create all of the data rows
	for (var i = 0; i < data.length; i++) {
		var rowElem = document.createElement("tr");
		this.policyData[i].columns = {};

		for (var param in data[i]) {
			var column = document.createElement("td");
			column.innerHTML = data[i][param];

			this.policyData[i].columns[param] = column;
			rowElem.appendChild(column);
		}

		this.policyData[i].elem = rowElem;
	}

	// add the rows to the table
	this.appendRows();

	// add the table to the DOM
	element.appendChild(this.tableElement);
}

/**
* Adds all the rows to the table in the order they're found in policyData
* @function appendRows
* @private
* @memberof SortTable
*/
SortTable.prototype.appendRows = function() {
	for (var i = 0; i < this.policyData.length; i++) {
		this.tableElement.appendChild(this.policyData[i].elem);
	}

}

/**
* Sorts the rows of the table according to the given param. If a sortOrder is given, the row order will take that into account.
* @param {array} param The parameter of each data object to sort on.
* @function sortOn
* @private
* @memberof SortTable
*/
SortTable.prototype.sortOn = function(param) {

	this.clearTable();

	this.policyData = Sorter.sort(this.policyData, param, this.sortOrder[param]);

	this.appendRows();
}

/**
* Clears out all the rows of the table
* @function clearTable
* @private
* @memberof SortTable
*/
SortTable.prototype.clearTable = function() {
	for (var i = 0; i < this.policyData.length; i++) {
		if (this.policyData[i].elem.parentNode === this.tableElement) {
			this.tableElement.removeChild(this.policyData[i].elem);
		}
	}
}