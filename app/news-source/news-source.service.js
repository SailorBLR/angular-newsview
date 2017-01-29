'use strict';

angular.
  module('newsSource').
  factory('PassSrc', function () {

    var srcId = ' ';

    return {
        getSrcId: function () {
            return srcId;
        },
        setSrcId: function (id) {
            srcId = id;
        }
    };
});