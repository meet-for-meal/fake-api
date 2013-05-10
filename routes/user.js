
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.jsonp([{
    firstname: 'Rémy',
    lastname: 'Funky',
    username: 'rhannequin'
  }, {
    fistname: 'Hervé',
    lastname: 'Jagbomb',
    username: 'jagbomb'
  }]);
};