'use strict';

/*News source select controller*/
angular.
  module('newsSource').
  component('newsSource',  {
    templateUrl: 'news-source/news-source.template.html',
    controller: ['$http', '$scope', 'localStorageService', 'PassSrc', 
      function NewsSourceController($http, $scope, localStorageService, PassSrc) {
		 
		$http
		 .get("https://newsapi.org/v1/sources?language=en")
		 .then(function(response){
			 $scope.sources = response.data.sources;
			 $scope.sources.unshift(localStorageService.get('lclSrc'));
			 if(localStorageService.get('keyToSource') == null) {
				$scope.currentSrc = response.data.sources[0].id;
				localStorageService.set('keyToSource',$scope.currentSrc);
			 } else {
				$scope.currentSrc = localStorageService.get('keyToSource');
			 }
		 });
		 $scope.$watch('currentSrc', function (newValue, oldValue) {
		   if (newValue !== oldValue) {
			   localStorageService.set('keyToSource',newValue);
		   }
		   PassSrc.setSrcId(localStorageService.get('keyToSource'));
         });
      }
    ]
  });
