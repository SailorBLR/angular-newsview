'use strict';

/**Create news controller*/
angular.
  module('createNews').
  component('createNews',  {
    templateUrl: 'create-news/create-news.template.html',
    controller: ['$scope', 'localStorageService', 
     function CreateNewsController($scope, localStorageService) {
		 $scope.defaultValues = {title: " ", description: " "};
         $scope.reset = function() {
             $scope.newsItem = angular.copy($scope.defaultValues);
         };
		 $scope.save = function() {
			 localStorageService.set('savedItem',$scope.newsItem);
         };
     }
    ]
  });
