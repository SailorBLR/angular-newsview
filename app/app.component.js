'use strict';

/** Register `newsView` core component, along with its associated controller and template*/
angular.
  module('newsView')
  .controller('newsViewCtrl',function($http,localStorageService){
	 
	 //Settin the storage for internal news
	  if(localStorageService.get('lclSrc') == null) {
		$http.get('/core/local-source/localSource.json').then(function(response){
			localStorageService.set('lclSrc',response.data);    
        });
	  }
	  
	  //Settin the storage for 'later view'
	  if(localStorageService.get('lookAfter') == null) {
		$http.get('/core/local-source/lookAfterSource.json').then(function(response){
			localStorageService.set('lookAfter',response.data);    
        });
	  }
  });