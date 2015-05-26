app.factory('Customer', ['$http', 'Routes', function($http, Routes) {
  return {
    getList: function(successCB, failureCB) {
      this.httpRequestSender('GET', Routes.Api.customerIndexPath,
        null, successCB, failureCB
      );
    },

    get: function(id, successCB, failureCB) {
      this.httpRequestSender('GET', Routes.Api.customerShowPath(id),
        null, successCB, failureCB
      );
    },

    create: function(params, successCB, failureCB) {
      this.httpRequestSender('POST', Routes.Api.customerIndexPath,
        params, successCB, failureCB
      );
    },

    update: function(id, params, successCB, failureCB) {
      this.httpRequestSender('PUT', Routes.Api.customerShowPath(id),
        params, successCB, failureCB
      );
    },

    destroy: function(id, successCB, failureCB) {
      this.httpRequestSender('DELETE', Routes.Api.customerShowPath(id),
        null, successCB, failureCB
      );
    },

    httpRequestSender: function(method, url, params, successCB, failureCB) {
      $http({
        method: method,
        url: url,
        data: params
      }).success(function(data, status, headers, config) {
        successCB(data);
      }).error(function(data, status, headers, config) {
        failureCB(data)
      })
    }
  }
}]);
