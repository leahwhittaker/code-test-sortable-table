# Sortable Table Code Sample

##### This is a code sample built according to the following parameters:

_Implement your solution in HTML, CSS and JavaScript. You may use jQuery, Lo-Dash and/or a unit testing framework, but no other third-party plugins, libraries or frameworks._

_Solutions will be evaluated on the following criteria, in order:_

_1. Flexibility and modularity of design_

_2. Code readability_

_3. Correctly and completely implementing the specified functionality_

_Requirements_

_Implement a system that can:_

_1. Read the dataset from a JSON file._

_2. Sort the dataset on one field at a time, either in order of preference, if applicable, or alphabetically._

_3. Render an HTML table representation of the sorted data, with column headers. (Remember that the numbers represent monetary amounts, and should be presented as such!)_

_Include a test suite to prove that your sorting logic is sound. You may use a formal unit testing framework if you wish, or simply write a function that exercises the system and reports the results to the console. In either case, include any files/commands that you use to run the test suite yourself._

_Your solution will be evaluated in the current version of Firefox only._


## To run the tests:
* Install node if you don't already have it (https://nodejs.org/download/)
* Change directories into the project (use the directory location you unzipped this project to)
		'cd CodeSample_SortableTable'
* Install the node dependencies (only required for tests and compliling JSDocs)
	'npm install (might need to run as sudo)'
* Run the tests
	'mocha'

## To export the jsdocs:
	'jsdoc ./js -d docs'