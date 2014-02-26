'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('Ctrl', function($scope, makeAPICall) {
        $scope.dataURL = 'https://localhost/nimsapi/experiments/52c5c4fe2c17a58a7ba2da4e';
        $scope.schemaURL = 'https://localhost/nimsapi/experiments/schema';

        makeAPICall.async($scope.dataURL).then(function(data) {
            console.log("Made api data call");
            console.dir(data);
            $scope.data = data;
        });

        makeAPICall.async($scope.schemaURL).then(function(schema) {
            console.log("Made api schema call");
            console.dir(schema);
            $scope.schema = schema;
        });


    })
    .controller('TestController', function($scope, $http) {
        $scope.title = 'Angular JS JSON Schema 4 test';

        $scope.test1 = "tested ya";

        $scope.selectedIcon = '';
        $scope.selectedIcons = ['Globe', 'Heart'];
        $scope.icons = [{
            value: 'Gear',
            label: '<i class="fa fa-gear"></i> Gear'
        }, {
            value: 'Globe',
            label: '<i class="fa fa-globe"></i> Globe'
        }, {
            value: 'Heart',
            label: '<i class="fa fa-heart"></i> Heart'
        }, {
            value: 'Camera',
            label: '<i class="fa fa-camera"></i> Camera'
        }];
    });
