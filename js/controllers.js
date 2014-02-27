'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('Ctrl', function($scope, makeAPICall) {
        $scope.dataURL = 'https://localhost/nimsapi/experiments/52c5c4fe2c17a58a7ba2da4e';
        $scope.schemaURL = 'https://localhost/nimsapi/experiments/schema';

        $scope.model = [];

        $scope.getVariables = function(dataObject, schema) {
            console.log("\nData from object:");
            console.dir(dataObject);
            console.log("using schema:");
            console.dir(schema);

            if (schema.type != null) {
                console.log("\ntype: "+schema.type);

                if (schema.title != null) console.log(" title: "+schema.title);

                //iterate properties
                if (schema.properties != null) {
                    console.dir(schema.properties);
                    console.log("properties: ");

                    angular.forEach(schema.properties, function(property, key) {
                        console.log(key);
                        console.dir(property);

                        if (property.type === "string") {
                            //get data
                            var data = 'hi';
                            if (dataObject[key] != null) data = dataObject[key];

                            //todo: add a key for max length
                            ($scope.model).push({'type':'string', 'title': property.title, 'model':data});

                        }
                        //add different property type checks here, and if it's another iteratable object, maybe call this function again?
                        // if type === date-time, load a date picker
                        // if type === enum, load these into a dropdown
                        // it type === object, iterate again
                        //etc
                    });
                }
            }
        }

        makeAPICall.async($scope.dataURL).then(function(data) {
            console.log("Made api data call");
            console.dir(data);
            $scope.data = data;

            makeAPICall.async($scope.schemaURL).then(function(schema) {
                console.log("Made api schema call");
                console.dir(schema);
                $scope.schema = schema;

                $scope.getVariables($scope.data, schema);
            });
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
