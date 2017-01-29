'use strict';

// Register `newsList` component, along with its associated controller and template
angular.
  module('newsList').
  component('newsList', {
    templateUrl: 'news-list/news-list.template.html',
    controller: ['$http', '$scope', 'PassSrc', '$rootScope',  
      function NewsListController($http, $scope, PassSrc, $rootScope) {
		$scope.$watch(function () { 
		  return PassSrc.getSrcId(); 
		}, function (newValue, oldValue) {
         if (newValue !== oldValue) {
			 $scope.currentSrc = newValue;
			 $rootScope.bigSrc = newValue;
		 }
		 if (typeof $scope.currentSrc !== 'undefined') {
			 $http
				.get("https://newsapi.org/v1/articles?source="+ $scope.currentSrc +"&apiKey=2e9faeaf932f4190866fd7dbc6e6c570")
				.then(function(response){ 
				$scope.articles = response.data.articles;
			 });
		 }
        });
	  }
    ]
  });