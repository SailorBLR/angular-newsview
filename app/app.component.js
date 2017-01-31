'use strict';

// Register `newsList` component, along with its associated controller and template
angular.
  module('newsView')
  .controller('newsViewCtrl',function($http,localStorageService){
	 
	  if(localStorageService.get('lclSrc') == null) {
		$http.get('/core/local-source/localSource.json').then(function(response){
			localStorageService.set('lclSrc',response.data);    
        });
	  }
	  if(localStorageService.get('lookAfter') == null) {
		$http.get('/core/local-source/lookAfterSource.json').then(function(response){
			localStorageService.set('lookAfter',response.data);    
        });
	  }
  });