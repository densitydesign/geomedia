'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:loader
 * @description
 * # loader
 */
angular.module('geomediaApp')
  .directive('loader', function (dataservice, fileService, $rootScope, Upload) {
    return {
      templateUrl: 'views/loader.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var dsv = d3.dsv(";", "text/plain");


        scope.loadDataset = function(fname) {
            $rootScope.loading=true;
          fileService.getFile("data/"+fname).then(function(d){
            dataservice.setData(dsv.parse(d));

            var re = /_((?!.*_).*)\.csv/;

            $rootScope.gotdata = true;
            //$rootScope.keyword = scope.fname.match(re)[0];
            $rootScope.keyword = fname.match(re)[1];
            //console.log(scope.fname.match(re));


          })


        }

/*
          scope.$watch('files', function () {
              scope.upload(scope.files);
          });
          scope.$watch('file', function () {
              if (scope.file != null) {
                  scope.upload([scope.file]);
              }
          });
          scope.log = '';

          scope.upload = function (file) {
              Upload.upload({
                  url: './',
                  data: {file: file}
              }).then(function (resp) {
                  console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
              }, function (resp) {
                  console.log('Error status: ' + resp.status);
              }, function (evt) {
                  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                  console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
              });
          };


*/

      }
    };
  });
