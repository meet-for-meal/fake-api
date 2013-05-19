exports.list = function(req, res){
  res.jsonp([{
    id: 1,
    label: 'medium',
    description: 'Est affiché comme partenaire dans les résultats de recherche.'
  }, {
    id: 2,
    label: 'high',
    description: 'Est mis en avant en tant que partenaire privilégié dans les résultats de recherche.'
  }]);
};

exports.show = function(req, res){
  res.jsonp({
    id: 1,
    label: 'medium',
    description: 'Est affiché comme partenaire dans les résultats de recherche.'
  });
};

exports.update = function(req, res){
  res.jsonp({ status: 'ok' });
};