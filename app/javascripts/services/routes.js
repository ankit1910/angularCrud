app.factory('Routes', [function() {
  var BasePath = 'http://localhost:3000/';
  var Routes = {
    Api: {
      customerIndexPath: BasePath + 'employees.json',
      customerShowPath: function(id) {
        return BasePath + 'employees/' + id + '.json'
      }
    }
  };
  return Routes;
}]);
