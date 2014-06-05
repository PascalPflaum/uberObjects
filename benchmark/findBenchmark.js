var Benchmark = require('benchmark');
var uber = require('../')();

var underscore = require('underscore');
var lodash = require('lodash');
require('mootools');

// add tests
(function() {

	var testName = 'find()';

	function oddNumber(element) {
		return (element % 2 === 1);
	}

	function makeRandomString(length)
	{
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < length; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}

	function addSampleTests(sampleSize) {

		var testObj = {};
		debugger;
		while (uber.getLength(testObj) < sampleSize - 1) {
			var key = makeRandomString(10);
			var value = Math.floor(Math.random() * 1000000);
			if (value % 2 !== 1) {
				testObj[key] = value;
			}
		}

		//now add one odd number
		while (uber.getLength(testObj) < sampleSize) {
			var key = makeRandomString(10);
			var value = Math.floor(Math.random() * 1000000);
			if (value % 2 === 1) {
				testObj[key] = value;
			}
		}

		console.log('---------------------------------');
		console.log(testName + ' Size: ' + sampleSize);
		console.log('---------------------------------');

		var suite = new Benchmark.Suite;
		suite
				.add('manuall iteration', function() {
					var foundElement;
					for (var key in testObj) {
						if (testObj.hasOwnProperty(key)) {
							if (!oddNumber(testObj[key])) {
								foundElement = testObj[key];
								break;
							}
						}
					}
				})

				//uberObjects
				.add('uberObject', function() {
					uber.find(testObj, oddNumber);
				})

				//underscore.js
				.add('underscore.js', function() {
					underscore.find(testObj, oddNumber);
				})

				//mootools does not have a find method

				//Lo-Dash
				.add('lodash.js', function() {
					lodash.find(testObj, oddNumber);
				})

				// add listeners
				.on('cycle', function(event) {
					console.log(String(event.target));
				})
				.on('complete', function() {
					console.log('Fastest is ' + this.filter('fastest').pluck('name'));
				})
				// run async
				.run();

		return suite;
	}

	addSampleTests(10);
	addSampleTests(100);
	addSampleTests(1000);
	addSampleTests(10000);

})();