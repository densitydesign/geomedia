'use strict';

/**
 * @ngdoc service
 * @name geomediaApp.dataservice
 * @description
 * # dataservice
 * Service in the geomediaApp.
 */
angular.module('geomediaApp')
  .factory('dataservice', function () {

    var data = {};
    var metadata = {};
    var filterdata = {};

    return {

      setData: function (newData) {
        data = newData;
      },
      getData: function () {
        return data;
      },
      setMetaData: function (newMetaData) {
        metadata = newMetaData;
      },
      getMetaData: function () {
        return metadata;
      },
      setFilterData: function (newFilterData) {
        filterdata = newFilterData;
      },
      getFilterData: function () {
        return filterdata;
      }

    }

  });
