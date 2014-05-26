var Benchmark = require('benchmark');
require('../');


// add tests
(function() {

	var suite = new Benchmark.Suite;

	var testObj = {
		keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
	};
	var testArr = Object.values(testObj);

	function isBigEnough(element, index, object) {
		return (element >= 10);
	}

	suite
			.add('Object.every()', function() {
				Object.every(testObj, isBigEnough);
			})

			.add('Object manuall iteration', function() {
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
			.add('Array.prototype.every()', function() {
				testArr.every(isBigEnough);
			})

			.add('Array manuall iteration', function() {
				var every = true;
				for (var key = 0; key < testArr.length; key++) {
					if (!isBigEnough(testObj[key])) {
						every = false;
						break;
					}
				}
			})


			// add listeners
			.on('cycle', function(event) {
				console.log(String(event.target));
			})
			.on('complete', function() {
				console.log('Fastest is ' + this.filter('fastest').pluck('name'));
			})
			// run async
			.run({'async' : true});
})();