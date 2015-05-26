
/* App Module */

var app = angular.module('customer', [
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/list.html',
        controller: 'ListCtrl'
      }).
      when('/new', {
        templateUrl: 'partials/form.html',
        controller: 'NewCtrl'
      }).
      when('/edit/:customerId', {
        templateUrl: 'partials/form.html',
        controller: 'EditCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);

// app.factory("services", ['$http', function($http) {
//   var serviceBase = 'services/'
//     var obj = {};
//     obj.getCustomers = function(){
//         return $http.get(serviceBase + 'customers');
//     }
//     obj.getCustomer = function(customerID){
//         return $http.get(serviceBase + 'customer?id=' + customerID);
//     }

//     obj.insertCustomer = function (customer) {
//     return $http.post(serviceBase + 'insertCustomer', customer).then(function (results) {
//         return results;
//     });
//   };

//   obj.updateCustomer = function (id,customer) {
//       return $http.post(serviceBase + 'updateCustomer', {id:id, customer:customer}).then(function (status) {
//           return status.data;
//       });
//   };

//   obj.deleteCustomer = function (id) {
//       return $http.delete(serviceBase + 'deleteCustomer?id=' + id).then(function (status) {
//           return status.data;
//       });
//   };

//     return obj;
// }]);

// app.controller('listCtrl', function ($scope, services) {
//     services.getCustomers().then(function(data){
//         $scope.customers = data.data;
//     });
// });

// app.controller('editCtrl', function ($scope, $rootScope, $location, $routeParams, services, customer) {
//     var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
//     $rootScope.title = (customerID > 0) ? 'Edit Customer' : 'Add Customer';
//     $scope.buttonText = (customerID > 0) ? 'Update Customer' : 'Add New Customer';
//       var original = customer.data;
//       original._id = customerID;
//       $scope.customer = angular.copy(original);
//       $scope.customer._id = customerID;

//       $scope.isClean = function() {
//         return angular.equals(original, $scope.customer);
//       }

//       $scope.deleteCustomer = function(customer) {
//         $location.path('/');
//         if(confirm("Are you sure to delete customer number: "+$scope.customer._id)==true)
//         services.deleteCustomer(customer.customerNumber);
//       };

//       $scope.saveCustomer = function(customer) {
//         $location.path('/');
//         if (customerID <= 0) {
//             services.insertCustomer(customer);
//         }
//         else {
//             services.updateCustomer(customerID, customer);
//         }
//     };
// });
