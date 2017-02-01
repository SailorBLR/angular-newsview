'use strict';

/**Create news controller*/
angular.
  module('createNews').
  component('createNews',  {
    templateUrl: 'create-news/create-news.template.html',
    controller: ['$scope', 'localStorageService', 'SaveForLocal',
     function CreateNewsController($scope, localStorageService, SaveForLocal) {
		 $scope.defaultValues = {title: " ", description: " "};
         $scope.reset = function() {
             $scope.newsItem = angular.copy($scope.defaultValues);
         };
		 $scope.save = function() {
			 SaveForLocal.addNewsItem($scope.newsItem);	 
			 $scope.newsItem = SaveForLocal.getFullNewsItem();
			 var last = localStorageService.get('lclSrc').articles.length-1;
			 var temp = localStorageService.get('lclSrc');

			 temp.lastId = last;
			 localStorageService.set('lclSrc',temp);
			 
			 window.location.href = "#/edit";
         };
     }
    ]
  });
