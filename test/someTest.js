if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	var uber = require('../')();
}

var expect = chai.expect;

describe('Object.every', function() {

	var isBigEnoughSpy = sinon.spy(function(element, index, object) {
		return (element >= 100);
	});

	afterEach(function() {
		isBigEnoughSpy.reset();
	});

	it('isBigEnough', function() {

		var obj = {
			keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
		};
		
		var passed = uber.some(obj, isBigEnoughSpy);
		expect(passed).to.be.true;
		expect(isBigEnoughSpy.callCount).to.be.below(Object.keys(obj).length);
		
	});

	it('!isBigEnough', function() {

		var obj = {
			keyA : 12, keyB : 5, keyC : 8, keyD : 99, keyE : 44
		};

		var passed = uber.some(obj, isBigEnoughSpy);
		expect(passed).to.be.false;
		expect(isBigEnoughSpy).to.have.callCount(Object.keys(obj).length);

	});

});