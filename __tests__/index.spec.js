(function() {
  const NxRandomAvatar = require('../src');

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

    test('test random get', ()=>{
      for (let i = 0; i < 100; i++) {
        var img = NxRandomAvatar.get(i);
        expect(img.indexOf('.jpg') > -1).toBe(true);
      }
    });
  });
})();
