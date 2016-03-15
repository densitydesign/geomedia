'use strict';

/**
 * @ngdoc service
 * @name mihReportApp.apiService
 * @description
 * # apiService
 * Factory in the mihReportApp.
 */
angular.module('mihReportApp')
  .factory('fileService', function ($q, $http) {

    return {

      getFile : function(url){
        var deferred = $q.defer();
        $http.get(url).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          /*
          $modal.open({
            templateUrl:'views/modalerror.html',
            controller:'ModalerrorCtrl',
            size: 'sm'
          })
          */

          deferred.reject("An error occured while fetching file");
        });

        return deferred.promise;
      }
    }
  });
