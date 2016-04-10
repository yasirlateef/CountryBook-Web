var countriesCtrl = angular.module('countriesCtrl', ['ngRoute', 'countriesService']);

countriesCtrl.controller('countriesController', function($scope, countries){
	countries.list(function(countries){
		$scope.countries = countries;
	});
});

countriesCtrl.controller('countriesDetailController', function($scope, $routeParams, countries){
	countries.find($routeParams.countryName, function(country){
		$scope.country = country;
		$scope.isArray = Array.isArray;
	});
});

countriesCtrl.controller('countriesAttribController', function($scope, $routeParams, countries){
	countries.findAttribute($routeParams.countryName, $routeParams.attribName, function(res){
		$scope.countryName = $routeParams.countryName;
		$scope.attribName = $routeParams.attribName;
		$scope.response = res;
	});
});