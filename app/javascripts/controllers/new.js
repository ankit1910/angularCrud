app.controller('NewCtrl', ['$scope', '$location', 'Customer', function ($scope, $location, Customer) {
  $scope.customer = {}

  $scope.submit = function() {
    var params = {
      employee: this.customer
    }

    Customer.create(params, function(data) {
      $location.url('/').replace();
    },function(data) {
      alert('error');
    })
  }
}])
