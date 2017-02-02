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
			
			 
			 //Selecting news source. If not selected set local.
			 
			 if(localStorageService.get('currSource') == null) {
				$scope.currentSrc = $scope.sources[0];
				localStorageService.set('currSource',$scope.currentSrc);
				
				//Else get from session
				
			 } else {
				 
				 var temp = localStorageService.get('currSource');
				 $scope.currentSrc = temp;
			 }
			}
		 );
		 
		 //Watching for the local storage changes
		 
		 $scope.$watch('currentSrc', function (newValue, oldValue) {
		   if (newValue !== oldValue) {
			   localStorageService.set('currSource',newValue);
		   }
		   PassSrc.setSrc(localStorageService.get('currSource'));
         });
      }
    ]
  });
