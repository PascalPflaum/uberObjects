if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	var uber = require('../')();
}

var expect = chai.expect;

describe('Object.forEach', function() {
	
	it('{}, no iteration', function() {
		
		var iterationSpy = sinon.spy();
		uber.forEach({}, iterationSpy);
		expect(iterationSpy).have.not.been.called;
		
	});
	
	it('one iteration', function() {
		
		var iterationSpy = sinon.spy();
		uber.forEach({'key':'value'}, iterationSpy);
		expect(iterationSpy).have.been.calledOnce;
		expect(iterationSpy).have.been.calledWithExactly('value','key');
		
	});
	
});