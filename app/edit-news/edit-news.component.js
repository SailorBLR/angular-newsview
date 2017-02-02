'use strict';

/**Edit news controller*/
angular.
  module('editNews').
  component('editNews',  {
    templateUrl: 'edit-news/edit-news.template.html',
    controller: ['$scope', 'localStorageService',
     function CreateNewsController($scope, localStorageService) {
		$scope.artId = localStorageService.get('lclSrc').lastId;
		$scope.article = localStorageService.get('lclSrc').articles[$scope.artId];
		
		$scope.detailed = function() {
			localStorageService.set('keyToSource',localStorageService.get('lclSrc').id);
            window.location.href = "#/newsItem/" + $scope.artId;
         };
		$scope.delete = function() {
			var temp = localStorageService.get('lclSrc');
			if (temp.articles.length > 0) {
				temp.articles.splice($scope.artId,1);
			}
			localStorageService.set('lclSrc',temp);
			window.location.href = "index.html";
        };
     }
    ]
  });
