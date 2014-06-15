if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	var uber = require('../')();
}

var expect = chai.expect;

describe('Object.without', function() {

	it('empty object, some values', function() {

		expect(uber.without({}, ['a', 'b'])).to.be.deep.equal({});

	});

	it('empty object after filtering', function() {

		expect(uber.without({a : 12, b : 34}, ['a', 'b'])).to.be.deep.equal({});

	});

	it('some properties in the object after without', function() {

		var obj = {
			keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
		};

		expect(uber.without(obj, ['keyC', 'keyD'])).to.be.deep.equal({
			keyA : 12, keyB : 54, keyE : 44
		});
		
	});

//	describe('several strings instead of arry', function() {
//
//		it('empty object, some values', function() {
//
//			expect(uber.without({}, 'a', 'b')).to.be.deep.equal({});
//
//		});
//
//		it('empty object after filtering', function() {
//
//			expect(uber.without({a : 12, b : 34}, 'a', 'b')).to.be.deep.equal({});
//
//		});
//
//		it('some properties in the object after without', function() {
//
//			var obj = {
//				keyA : 12, keyB : 54, keyC : 18, keyD : 130, keyE : 44
//			};
//
//			expect(uber.without(obj, 'keyC', 'keyD')).to.be.deep.equal({
//				keyA : 12, keyB : 54, keyE : 44
//			});
//
//		});
//
//	});


});