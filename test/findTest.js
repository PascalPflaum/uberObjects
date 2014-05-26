if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	require('../');
}

var expect = chai.expect;

describe('Object.find', function() {

	it('{}, no iteration', function() {

		var iterationSpy = sinon.spy();
		Object.find({}, iterationSpy);
		expect(iterationSpy).have.not.been.called;

	});

	it('stops searching on first positive filter', function() {

		var data = {
			'keyA' : 13,
			'keyB' : 211,
			'keyC' : 666,
			'keyD' : 1235,
			'keyE' : 888888
		};

		var iterationSpy = sinon.spy(function(item, key, obj) {
			expect(obj).to.be.equal(data);
			expect(data).to.contain.keys(key);
			return !(item % 2);
		});
		
		var found = Object.find(data, iterationSpy);
		expect(found).to.be.equal(666);
		expect(iterationSpy.callCount).to.be.below(Object.keys(data).length);

	});

});