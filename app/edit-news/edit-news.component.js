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
            window.location.href = "#/newsItem/" + $scope.artId;
         };
		$scope.delete = function() {
			var temp = localStorageService.get('lclSrc');
			if (temp.articles > 0) {
				alert(temp.articles.length);
				temp.articles.splice($scope.artId,1);
				alert(temp.articles.length);
			}
			localStorageService.set('lclSrc',temp);
			window.location.href = "index.html";
        };
     }
    ]
  });
