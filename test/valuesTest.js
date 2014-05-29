if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	var uber = require('../')();
}

var expect = chai.expect;

describe('Object.values', function() {

	it('empty object, empty values', function() {

		expect(uber.values({})).to.be.instanceof(Array).and.to.be.empty;

	});

	it('some properties in the object', function() {

		var obj = {
			keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
		};

		expect(uber.values(obj)).to.be.deep.equal([12, 54, 18, 130, 44]);

	});


});