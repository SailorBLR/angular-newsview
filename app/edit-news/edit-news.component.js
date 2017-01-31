'use strict';

/**Create news controller*/
angular.
  module('editNews').
  component('editNews',  {
    templateUrl: 'edit-news/edit-news.template.html',
    controller: ['$scope', 'localStorageService',
     function CreateNewsController($scope, localStorageService, SaveForLocal) {
		 /*$scope.defaultValues = {title: " ", description: " "};
         $scope.reset = function() {
             $scope.newsItem = angular.copy($scope.defaultValues);
         };
		 $scope.save = function() {
			 SaveForLocal.addNewsItem($scope.newsItem);
			 window.location.href = "index.html";
         };*/
     }
    ]
  });
