/**
* Constructs a table with sortable rows. The sorting functionality expects a dataset with parameters specific to health plan policies.
* Descending or ascending column values are set for policy-specific values.
* @param {HTMLDivElement} element The DOM element that the PolicyTable should be appended to.
* @param {array} data An array of data objects that contain information for a PolicyTable.
* @constructor
*/
function PolicyTable(element, data) {

	this.sortOrder = {
		carrierName: Sorter.ASCENDING,
		planName: Sorter.ASCENDING,
		copay: Sorter.ASCENDING,
		premium: Sorter.ASCENDING,
		annualLimit: Sorter.DESCENDING
	};

	this.init(element, data);

	// format certain column values as dollars
	for (var i = 0; i < this.policyData.length; i++) {
		for (var param in this.policyData[i]) {
			if (param === "copay" || param === "premium" || param === "annualLimit") {
				this.policyData[i].columns[param].innerHTML = FormatUtils.formatCurrency(this.policyData[i][param]);
			}
		}
	}

	this.sortOn("policyName");
}

PolicyTable.prototype = new SortTable();