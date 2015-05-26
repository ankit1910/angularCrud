app.controller('ListCtrl', ['$scope', 'Customer', function ($scope, Customer) {
  Customer.getList(function(data) {
    $scope.customers = data;
  }, function() {
    alert("error");
  });

  $scope.destroy = function(customer, index) {
    Customer.destroy(customer.id, function(data) {
      $scope.customers.splice(index, 1)
    }, function() {
      alert('error');
    })
  }
}])
