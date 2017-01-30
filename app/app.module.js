'use strict';

/*News view application register newsView*/
angular.module('newsView', [
  'ngRoute',
  'newsSource',
  'newsList',
  'newsItem',
  'LocalStorageModule',
  'createNews'
]);
