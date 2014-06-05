var Benchmark = require('benchmark');
var uber = require('../')();

var underscore = require('underscore');
var lodash = require('lodash');
var mootools = require('mootools');

// add tests
(function() {

	var testName = 'every()';
	
	function isBigEnough(element, index, object) {
		return (element >= 0);
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

		while (uber.getLength(testObj) < sampleSize) {
			var key = makeRandomString(10);
			var value = Math.random * 10000;
			testObj[key] = value;
		}
		
		console.log('---------------------------------');
		console.log(testName + ' Size: ' + sampleSize);
		console.log('---------------------------------');

		var suite = new Benchmark.Suite;
		suite
				.add('manuall iteration', function() {
					var every = true;
					for (var key in testObj) {
						if (testObj.hasOwnProperty(key)) {
							if (!isBigEnough(testObj[key])) {
								every = false;
								break;
							}
						}
					}
				})

				//uberObjects
				.add('uberObject', function() {
					uber.every(testObj, isBigEnough);
				})

				//underscore.js
				.add('underscore.js', function() {
					underscore.every(testObj, isBigEnough);
				})

				//mootools extends the native Objects
				.add('mootools.js', function() {
					Object.every(testObj, isBigEnough);
				})

				//Lo-Dash
				.add('lodash.js', function() {
					lodash.every(testObj, isBigEnough);
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