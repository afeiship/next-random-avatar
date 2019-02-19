(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxRandom = nx.random || require('next-random');
  var nxRandomList = nx.randomList || require('next-random-list');
  var API_URL = 'https://randomuser.me/api/portraits/';
  var MAP = [100, 100, 10];

  var NxRandomAvatar = nx.declare('nx.RandomAvatar', {
    statics: {
      'men,women,lego': function(inName, inIndex) {
        return function(inLength) {
          return inLength
            ? nx.randomList(this[inName], inLength)
            : API_URL + inName + '/' + nx.random(0, MAP[inIndex]) + '.jpg';
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRandomAvatar;
  }
})();
