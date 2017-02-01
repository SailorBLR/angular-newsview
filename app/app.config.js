'use strict';

angular.
  module('newsView').
  config(['$locationProvider' ,'$routeProvider', 'localStorageServiceProvider',
    function config($locationProvider, $routeProvider, localStorageServiceProvider) {
      $locationProvider.html5Mode(true);
	  localStorageServiceProvider
		.setPrefix('newsView')
		.setStorageType('sessionStorage');
      $routeProvider.
        when('/newsItem/:itemId', {
          template: '<news-item></news-item>'
        }).
		when('/index.html', {
          template: '<news-list class="view-frame"></news-list>'
        }).
		when('/sources', {
          template: '<news-list class="view-frame"></news-list>'
        }).
		when('/create', {
          template: '<create-news class="view-frame"></create-news>'
        }).
		when('/edit', {
          template: '<edit-news class="view-frame"></edit-news>'
        }).
		when('/later', {
          template: '<later-news class="view-frame"></later-news>'
        }).
        otherwise({
		  template: '<news-list class="view-frame"></news-list>'
		});
    }
 ]);