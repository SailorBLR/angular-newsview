'use strict';

// Register `newsList` component, along with its associated controller and template
angular.
  module('newsList').
  component('newsList', {
    templateUrl: 'news-list/news-list.template.html',
    controller: ['$http', '$scope', 'localStorageService', 'PassSrc', 
      function NewsListController($http, $scope, localStorageService, PassSrc) {
		  
		  //Watching for news source changes
		$scope.$watch(function () { 
		  return PassSrc.getSrc(); 
		}, function (newValue, oldValue) {
         if (newValue !== oldValue) {
			 $scope.currentSrc = newValue;
		 }
		 
		 //Verifying source id. If successfull - send request to WebApi
		 if ((localStorageService.get('currSource') !== null )
		 && (localStorageService.get('currSource').id !== localStorageService.get('lclSrc').id)) {
			 $http
				.get("https://newsapi.org/v1/articles?source="+ localStorageService.get('currSource').id +"&apiKey=2e9faeaf932f4190866fd7dbc6e6c570")
				.then(function(response){ 
				$scope.articles = response.data.articles;
			 });
		 } else {
			 // or getting a local source.
				$scope.articles = localStorageService.get('lclSrc').articles;
		 }
        });
		
		//Adding news items to list for future view
		 $scope.addToLaterList = function(article,index) {
			 var temp = localStorageService.get('lookAfter');
			 article.parentId = index;
			 temp.articles.push(article);
			 localStorageService.set('lookAfter',temp);
         };
		 
		 $scope.getCategory = function() {
			 return localStorageService.get('currSource').category;
		
		};
	  }
    ]
  });