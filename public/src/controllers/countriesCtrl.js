var countriesCtrl = angular.module('countriesCtrl', ['ngRoute', 'countriesService']);

countriesCtrl.run(function($rootScope){
	$rootScope.host = 'http://localhost:8888';
});

countriesCtrl.controller('countriesController', function($scope, countries){
	countries.list(function(countries){
		$scope.countries = countries;
	});
});

countriesCtrl.controller('countriesDetailController', function($rootScope, $scope, $routeParams, countries){
	countries.find($routeParams.countryName, function(country){
		$scope.country = country;
		$scope.isArray = Array.isArray;
		$scope.host = $rootScope.host;
	});
});

countriesCtrl.controller('countriesAttribController', function($rootScope, $scope, $routeParams, countries){
	countries.findAttribute($routeParams.countryName, $routeParams.attribName, function(res){
		$scope.countryName = $routeParams.countryName;
		$scope.attribName = $routeParams.attribName;
		$scope.response = res;
		$scope.host = $rootScope.host;
	});
});