// app.js
// define our application and pull in ngRoute and ngAnimate
var fuelmanagementApp = angular.module('fuelmanagementApp', ['ngRoute']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
fuelmanagementApp.config(function ($routeProvider) {
    $routeProvider
    	// home page
    	.when('/', {
    	    templateUrl: 'FuelStation.html',
    	    controller: 'fuelStationController'
    	})

    	.when('/fuelType', {
    	    templateUrl: 'FuelType.html',
    	    controller: 'fuelTypeController'
    	})
        
    	.when('/fuelPrice', {
    	    templateUrl: 'FuelPrice.html',
    	    controller: 'fuelPriceController'
    	});

});

