'use strict';

/*News source select controller*/
angular.
  module('newsSource').
  component('newsSource',  {
    templateUrl: 'news-source/news-source.template.html',
    controller: ['$http', '$scope', 'PassSrc',
      function NewsSourceController($http, $scope, PassSrc) {
		
		$http
		 .get("https://newsapi.org/v1/sources?language=en")
		 .then(function(response){ 
		 $scope.sources = response.data.sources;
		 $scope.currentSrc = response.data.sources[0].id;
		 });
		 $scope.$watch('currentSrc', function (newValue, oldValue) {
		   if (newValue !== oldValue) PassSrc.setSrcId(newValue);
         });
      }
    ]
  });
