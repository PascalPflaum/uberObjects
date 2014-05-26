if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	require('../');
}

var expect = chai.expect;

describe('Object.subset', function() {

	it('empty object, some values', function() {

		expect(Object.subset({}, ['a', 'b'])).to.be.deep.equal({});

	});

	it('some properties in the object', function() {

		var obj = {
			keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
		};

		expect(Object.subset(obj, ['keyC', 'keyD'])).to.be.deep.equal({
			keyC : 18, keyD : 130
		});

	});


});