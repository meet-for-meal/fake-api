
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.jsonp([{
    id: 1,
    firstname: 'Rémy',
    lastname: 'Funky',
    age: 22,
    email: 'remy@gmail.com',
    password: 'remy',
    gender: 1,
    firstVisit: 1,
    lastPosition: new Date(2013, 2, 27, 12, 15, 0),
    lastLatitude: 48.8787394,
    lastLongitude: 2.4
  }, {
    id: 2,
    firstname: 'Hervé',
    lastname: 'Jagbomb',
    age: 22,
    email: 'herve@gmail.com',
    password: 'herve',
    gender: 1,
    firstVisit: 1,
    lastPosition: new Date(2013, 2, 27, 12, 15, 0),
    lastLatitude: 48.8787394,
    lastLongitude: 2.4
  }, {
    id: 3,
    firstname: 'Julien',
    lastname: 'WETSTEIN',
    age: 24,
    email: 'julienwetstein@gmail.com',
    password: 'thunder',
    gender: 1,
    firstVisit: 1,
    lastPosition: new Date(2013, 2, 27, 12, 15, 0),
    lastLatitude: 48.8787394,
    lastLongitude: 2.4
  }]);
};

exports.show = function(req, res){
  res.jsonp({
    id: 3,
    firstname: 'Julien',
    lastname: 'WETSTEIN',
    age: 24,
    email: 'julienwetstein@gmail.com',
    password: 'thunder',
    gender: 1,
    firstVisit: 1,
    lastPosition: new Date(2013, 2, 27, 12, 15, 0),
    lastLatitude: 48.8787394,
    lastLongitude: 2.4
  });
};

exports.update = function(req, res){
  res.jsonp({});
};