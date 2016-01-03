var assert = require('chai').assert
var expect = require('chai').expect

var Sorter = require("../js/Sorter.js");

var testSet1 = [{a:3},{a:4},{a:1},{a:2}];
var answerSet1a = [{a:1},{a:2},{a:3},{a:4}];
var answerSet1b = [{a:4},{a:3},{a:2},{a:1}];

var testSet2 = [{a:3},{a:4},{a:1},{b:2}];
var answerSet2 = [{a:4},{a:3},{a:1},{b:2}];

var testSet3 = [{a:3},{a:3},{a:3},{a:2},{a:5}];
var answerSet3 = [{a:2},{a:3},{a:3},{a:3},{a:5}];

var testSet4 = [{a:3,b:1},{a:4,b:2},{a:1,b:5},{a:2,b:4}];
var answerSet4 = [{a:1,b:5},{a:2,b:4},{a:3,b:1},{a:4,b:2}];

describe('Sorter', function() {
  describe('sort()', function () {
    it('should sort in descending order when no order is given', function () {
    	var sorted = Sorter.sort(testSet1, "a");
      	expect(sorted).to.deep.equal(answerSet1b);
    });

    it('should sort in descending order when "descending" is given', function () {
    	var sorted = Sorter.sort(testSet1, "a", Sorter.DESCENDING);
    	expect(sorted).to.deep.equal(answerSet1b);
    });

    it('should sort in ascending order when "ascending" is given', function () {
    	var sorted = Sorter.sort(testSet1, "a", Sorter.ASCENDING);
    	expect(sorted).to.deep.equal(answerSet1a);
    });

    it('should put objects without the given parameter at the end', function () {
    	var sorted = Sorter.sort(testSet2, "a");
    	expect(sorted).to.deep.equal(answerSet2);
    });

    it('should correctly order objects with the same parameter value', function () {
    	var sorted = Sorter.sort(testSet3, "a", Sorter.ASCENDING);
    	expect(sorted).to.deep.equal(answerSet3);
    });

    it('should not care about the value of any other parameter', function () {
    	var sorted = Sorter.sort(testSet4, "a", Sorter.ASCENDING);
    	expect(sorted).to.deep.equal(answerSet4);
    });
  });
});