'use strict';
var <%= camelname %> = require('../src/<%= slugname %>.js');

exports['awesome'] = {
  setUp: function (done) {
    done();
  },
  'no args': function(test) {
    test.expect(1);
    test.equal(<%= camelname %>.awesome(), 'awesome', 'should be awesome');
    test.done();
  }
};
