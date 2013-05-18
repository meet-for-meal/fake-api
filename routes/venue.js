exports.list = function(req, res){
  res.jsonp([{
    id: 1,
    foursquare_id: '4cf6ef5d1801a143eedbecd4',
    partnership: 'medium',
    created_at: new Date(2013, 5, 11, 12, 0, 0)
  }, {
    id: 2,
    foursquare_id: '4ba88bdcf964a52078df39e3',
    partnership: 'high',
    created_at: new Date(2013, 5, 11, 14, 30, 0)
  }]);
};

exports.show = function(req, res){
  res.jsonp({
    id: 1,
    foursquare_id: '4cf6ef5d1801a143eedbecd4',
    partnership: 'medium',
    created_at: new Date(2013, 5, 11, 12, 0, 0)
  });
};