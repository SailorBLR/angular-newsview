'use strict';

/** Registers `newsItem` component, along with its associated controller and template*/
angular.
  module('newsItem').
  component('newsItem', {
    templateUrl: 'news-item/news-item.template.html',
    controller: ['$http', '$scope', '$routeParams', 'localStorageService',
      function NewsItemController($http, $scope, $routeParams, localStorageService) {
		var id = $routeParams.itemId;
		var bigSrc = localStorageService.get('currSource').id;
		var articles = [];
		if ((bigSrc !== null) && (bigSrc !== localStorageService.get('lclSrc').id)) {
			$http
			.get("https://newsapi.org/v1/articles?source="+ bigSrc +"&apiKey=2e9faeaf932f4190866fd7dbc6e6c570")
			.then(function(response){
			articles = response.data.articles;
			$scope.item = articles[id];
			});
		} else {
			articles = localStorageService.get('lclSrc').articles;
			$scope.item = articles[id];
		}
	  }
    ]
  });