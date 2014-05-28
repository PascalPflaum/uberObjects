if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	require('../');
}

var expect = chai.expect;

describe('Object.isEmpty', function() {

	describe('without prototype checking', function() {

		it('empty', function() {

			var obj = {};
			expect(Object.isEmpty(obj)).to.be.true;

		});

		it('single property', function() {

			var obj = {keyA : 'dataA'};
			expect(Object.isEmpty(obj)).to.be.false;

		});

	});

	describe('with prototype checking', function() {

		function TestObj() {
			return this;
		}

		it('empty', function() {

			var obj = new TestObj();
			expect(Object.isEmpty(obj, true)).to.be.true;

		});

		it('single property', function() {

			TestObj.prototype.keyA = false;

			var obj = new TestObj();
			expect(Object.isEmpty(obj, true)).to.be.false;

		});

	});

});