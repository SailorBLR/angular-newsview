'use strict';

// Register `newsList` component, along with its associated controller and template
angular.
  module('newsList').
  component('newsList', {
    templateUrl: 'news-list/news-list.template.html',
    controller: ['$http', '$scope', 'localStorageService', 'PassSrc', 
      function NewsListController($http, $scope, localStorageService, PassSrc) {
		$scope.$watch(function () { 
		  return PassSrc.getSrcId(); 
		}, function (newValue, oldValue) {
         if (newValue !== oldValue) {
			 $scope.currentSrc = newValue;
		 }
		 if (localStorageService.get('keyToSource')!==null) {
			 $http
				.get("https://newsapi.org/v1/articles?source="+ localStorageService.get('keyToSource') +"&apiKey=2e9faeaf932f4190866fd7dbc6e6c570")
				.then(function(response){ 
				$scope.articles = response.data.articles;
			 });
		 }
        });
		
	  }
    ]
  });