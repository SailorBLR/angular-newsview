'use strict';

angular.
  module('newsSource').
  factory('SaveForLocal', function (localStorageService) {
	var date = new Date();
	var weekday = new Array(7);
	weekday[0] = "Su";
	weekday[1] = "M";
	weekday[2] = "Tu";
	weekday[3] = "W";
	weekday[4] = "Th";
	weekday[5] = "F";
	weekday[6] = "Sa";
	  
    return {
        addNewsItem: function (newsItem) {
			var tempSrc = localStorageService.get('lclSrc');
			newsItem.author = 'Local user';
			newsItem.url = '#';
			newsItem.urlToImage = '#';
			newsItem.publishedAt = date.getFullYear() + "-"
                + (date.getMonth()+1)  + "-" 
                + date.getDate()
				+ weekday[date.getDay()]
                + date.getHours() + ":"  
                + date.getMinutes() + ":" 
                + date.getSeconds();
			tempSrc['articles'].push(newsItem);
			localStorageService.set('lclSrc',tempSrc);
        }
    };
});