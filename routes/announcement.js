exports.list = function(req, res){
  res.jsonp([{
    id: 1,
    creatorId: 1,
    createdDate: new Date(2013, 2, 26, 15, 13, 0),
    disponibilityDate: new Date(2013, 2, 27, 12, 15, 0),
    isOpen: 1,
    latitude: 48.8787394,
    longitude: 2.4,
    message: 'Recherche blondes à forte capacité intellectuelle.'
  }]);
};