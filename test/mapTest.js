if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	require('../');
}

var expect = chai.expect;

describe('Object.map', function() {

	var isBigEnoughSpy = sinon.spy(function(element, index, object) {
		return (element >= 10);
	});

	afterEach(function() {
		isBigEnoughSpy.reset();
	});
	
	it('{}, no iteration', function() {

		var mapped = Object.filter({}, isBigEnoughSpy);
		expect(mapped).to.be.empty;
		expect(isBigEnoughSpy).have.not.been.called;

	});
	
	it('isBigEnough', function() {

		var obj = {
			keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
		};
		
		var mapped = Object.map(obj, isBigEnoughSpy);
		expect(mapped).to.be.an.object;
		expect(isBigEnoughSpy).to.have.callCount(Object.keys(obj).length);
		expect(mapped).to.be.deep.equal({
			keyA : true, keyB : true, keyC : true, keyD : true, keyE : true
		});

	});

	it('!isBigEnough', function() {

		var obj = {
			keyA : 12, keyB : 5, keyC : 8, keyD : 130, keyE : 44
		};

		var mapped = Object.map(obj, isBigEnoughSpy);
		expect(mapped).to.be.an.object;
		expect(isBigEnoughSpy).to.have.callCount(Object.keys(obj).length);
		expect(mapped).to.be.deep.equal({
			keyA : true, keyB : false, keyC : false, keyD : true, keyE : true
		});
	});

});