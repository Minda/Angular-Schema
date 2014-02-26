'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngAnimate',
  'ngSanitize',
  'mgcrea.ngStrap'
]);

var BASE_URL = '../nimsapi/';
