'use strict';

angular.
  module('newsView').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/newsItem/:itemId', {
          template: '<news-item></news-item>'
        }).
        otherwise({
			template: '<news-list class="view-frame"></news-list>'
		});
    }
 ]);