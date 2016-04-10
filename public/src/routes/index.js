var router = angular.module('router', ['ngRoute']);

router.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/views/pages/home.html',
			controller : 'countriesController'
		})

		.when('/countries/:countryName', {
			templateUrl : '/views/pages/country.html',
			controller : 'countriesDetailController'
		})

		.when('/countries/:countryName/:attribName',{
			templateUrl : '/views/pages/attrib.html',
			controller : 'countriesAttribController'
		})

		.when('/regions',{
			templateUrl : '/views/pages/regions.html',
			controller : 'regionsController'
		})

		.when('/regions/:regionName',{
			templateUrl : '/views/pages/region.html',
			controller : 'regionsDetailController'
		})
});