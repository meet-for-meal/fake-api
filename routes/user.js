
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.jsonp([{
    id: 1,
    firstname: 'Rémy',
    lastname: 'Funky',
    username: 'rhannequin',
    created_at: new Date(2013, 5, 11, 12, 0, 0)
  }, {
    id: 2,
    firstname: 'Hervé',
    lastname: 'Jagbomb',
    username: 'jagbomb',
    created_at: new Date(2013, 5, 11, 14, 30, 0)
  }]);
};

exports.show = function(req, res){
  res.jsonp({
    id: 1,
    firstname: 'Rémy',
    lastname: 'Funky',
    username: 'rhannequin',
    created_at: new Date(2013, 5, 11, 12, 0, 0)
  });
};

exports.update = function(req, res){
  res.jsonp({});
};