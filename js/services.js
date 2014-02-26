'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

myApp.factory('makeAPICall', function($http) {

    var makeAPICall = {
        async: function(url) {
            console.log("makeAPICall with url="+url);
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http({
                method: 'GET',
                url: url,
            }).then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            }, function(reason) { //call if the http request fails
                console.log(reason);
                if (reason.status == '404') {
                    console.log("there is probably something wrong with the url or the server is unavailable");
                }
            });
            // Return the promise to the controller
            return promise;
        }
    };
    return makeAPICall;
});
