(function() {
  var nx = require('next-js-core2');
  var NxRandomAvatar = require('../src/next-random-avatar');

  describe('NxRandomAvatar.methods', function() {
    test('test men', function () {
      var manPic = NxRandomAvatar.men();
      expect(manPic.indexOf('.jpg') > -1).toBe(true);
      expect(manPic.indexOf('men') > -1).toBe(true);
    });

    test('test women', function () {
      var manPic = NxRandomAvatar.women();
      expect(manPic.indexOf('.jpg') > -1).toBe(true);
      expect(manPic.indexOf('women') > -1).toBe(true);
    });

    test('test lego', function () {
      var manPic = NxRandomAvatar.lego();
      expect(manPic.indexOf('.jpg') > -1).toBe(true);
      expect(manPic.indexOf('lego') > -1).toBe(true);
    });
  });
})();
