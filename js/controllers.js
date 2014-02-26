'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('MyCtrl1', [
    function() {

    }
])
    .controller('MyCtrl2', [
        function() {

        }
    ])
    .controller('TestController', function($scope, $http) {
        $scope.title = 'Angular JS JSON Schema 4 test';

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
