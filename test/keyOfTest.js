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

	it('finding fitting element', function() {

		var data = {
			'keyA' : 13,
			'keyB' : 211,
			'keyC' : 666,
			'keyD' : 1235,
			'keyE' : 888888
		};

		
		
		var found = Object.keyOf(data, 211);
		expect(found).to.be.equal('keyB');

	});
	
	it('not finding fitting element', function() {

		var data = {
			'keyA' : 13,
			'keyB' : 211,
			'keyC' : 666,
			'keyD' : 1235,
			'keyE' : 888888
		};

		
		
		var found = Object.keyOf(data, 212);
		expect(found).to.be.undefined;

	});

});