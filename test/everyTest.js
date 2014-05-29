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
		return (element >= 10);
	});

	afterEach(function() {
		isBigEnoughSpy.reset();
	});

	it('isBigEnough', function() {

		var obj = {
			keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
		};

		var passed = uber.every(obj, isBigEnoughSpy);
		expect(passed).to.be.true;
		expect(isBigEnoughSpy).to.have.callCount(Object.keys(obj).length);

	});

	it('!isBigEnough', function() {

		var obj = {
			keyA : 12, keyB : 5, keyC : 8, keyD : 130, keyE : 44
		};

		var passed = uber.every(obj, isBigEnoughSpy);
		expect(passed).to.be.false;
		expect(isBigEnoughSpy.callCount).to.be.below(Object.keys(obj).length);

	});
	
	//The range of elements processed by every is set before the first invocation of callback.
	//Elements which are appended to the array after the call to every begins will not be visited by callback.
	it('iteration only over keys set before first callback', function() {
		
		var nr = 1;
		
		var obj = {
			'a' : nr++,
			'b' : nr++
		};
		var callback = sinon.spy(function(element, index, object) {
			object.z = nr++;
			return true;
		});
		
		uber.every(obj, callback);
		
		expect(callback).to.have.callCount(2);
		
	});

});