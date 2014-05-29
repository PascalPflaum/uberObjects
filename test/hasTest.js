if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	var uber = require('../')();
}

var expect = chai.expect;

describe('Object.has', function() {

	it('empty', function() {

		var obj = {};
		expect(uber.has(obj, 'keyA')).to.be.false;

	});

	it('single property', function() {

		var obj = {keyA : 'dataA'};
		expect(uber.has(obj, 'keyA')).to.be.true;
		expect(uber.has(obj, 'false')).to.be.false;

	});

	it('several properties property, found all', function() {

		var obj = {keyA : 'dataA', keyB : 'dataB'};
		expect(uber.has(obj, 'keyA', 'keyB')).to.be.true;

	});
	
	it('several properties property, found just one', function() {

		var obj = {keyA : 'dataA', keyB : 'dataB'};
		expect(uber.has(obj, 'keyA', 'keyC')).to.be.false;

	});

	it('the hasOwnProperty property', function() {

		var obj = {
			hasOwnProperty : 12
		};
		
		expect(uber.has(obj, 'hasOwnProperty')).to.be.true;

	});

});