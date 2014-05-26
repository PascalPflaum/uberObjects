if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	require('../');
}

var expect = chai.expect;

describe('Object.getLength', function() {

	it('empty object', function() {

		var obj = {};
		expect(Object.getLength(obj)).to.be.equal(0);

	});

	it('some values', function() {

		var obj = {
			keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
		};
		
		expect(Object.getLength(obj)).to.be.equal(Object.keys(obj).length);

	});

});