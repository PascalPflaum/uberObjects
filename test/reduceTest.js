if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	require('../');
}

var expect = chai.expect;

describe('Object.reduce', function() {

	var reductionSpy = sinon.spy(function(previousValue, currentValue, index, array) {
		return previousValue + currentValue;
	});

	it('no initial value', function() {

		var obj = {
			keyA : 0, keyB : 1, keyC : 2, keyD : 3, keyE : 4
		};

		var reduction = Object.reduce(obj, reductionSpy);
		expect(reduction).to.be.equal(10);

	});

	it('initial value', function() {

		var obj = {
			keyA : 0, keyB : 1, keyC : 2, keyD : 3, keyE : 4
		};

		var reduction = Object.reduce(obj, reductionSpy, 100);
		expect(reduction).to.be.equal(110);

	});

	it('error for neither initial value, nor iteration', function() {
		expect(function() {
			Object.reduce({}, function() {
			});
		}).to.throw(/neither initial value nor object properties to iterate/);
	});


	//If the array has only one element (regardless of position) and no initialValue was provided,
	//or if initialValue is provided but the array is empty, the solo value would be returned without calling callback.
	it('object with single item and no initial value', function() {

		var reduced = Object.reduce({'a' : 'b'}, function() {
			return;
		});

		expect(reduced).to.be.equal('b');

	});


	//If the array has only one element (regardless of position) and no initialValue was provided,
	//or if initialValue is provided but the array is empty, the solo value would be returned without calling callback.
	it('object with not item, but initial value', function() {

		var reduced = Object.reduce({}, function() {
			return;
		}, 'b');

		expect(reduced).to.be.equal('b');

	});

});