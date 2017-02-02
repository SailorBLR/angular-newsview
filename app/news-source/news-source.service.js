'use strict';

angular.
  module('newsSource').
  factory('PassSrc', function () {

    var source = ' ';

    return {
        getSrc: function () {
            return source;
        },
        setSrc: function (src) {
            source = src;
        }
    };
});