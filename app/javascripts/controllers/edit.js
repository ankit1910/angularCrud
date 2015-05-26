app.controller('EditCtrl', ['$scope', '$route', '$location', 'Customer', function ($scope, $route, $location, Customer) {

  Customer.get($route.current.params.customerId, function(data) {
    $scope.customer = data
  }, function() {
    alert("error");
  })

  $scope.submit = function() {
    var params = {
      employee: this.customer
    }

    Customer.update(this.customer.id, params, function(data) {
      $location.url('/').replace();
    },function(data) {
      alert('error');
    })
  }
}])
