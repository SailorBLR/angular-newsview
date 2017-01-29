'use strict';

/*News source select controller*/
angular.
  module('newsSource').
  component('newsSource',  {
    templateUrl: 'news-source/news-source.template.html',
    controller: ['$http', 
      function NewsSourceController($http) {
		var self = this;
		$http
		 .get("https://newsapi.org/v1/sources?language=en")
		 .then(function(response,sources){ 
		  self.sources = response.data.sources; 
		  self.currentSrc = response.data.sources[0].id;
		 });
      }
    ]
  });
