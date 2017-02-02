'use strict';

/** Register `laterNews` component, along with its associated controller and template*/
angular.
  module('laterNews').
  component('laterNews', {
    templateUrl: 'later-news/later-news.template.html',
    controller: ['$scope', 'localStorageService',  
      function NewsListController($scope, localStorageService) {
		$scope.articles = localStorageService.get('lookAfter').articles;
		
		//Removes an item from list
		$scope.removeFromLaterList = function(index) {
			$scope.articles.splice(index,1);
			var temp = localStorageService.get('lookAfter');
			temp.articles = $scope.articles;
			localStorageService.set('lookAfter',temp);
         };
		
	  }
    ]
  });