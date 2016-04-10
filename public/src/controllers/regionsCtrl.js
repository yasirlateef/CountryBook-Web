var regionsCtrl = angular.module('regionsCtrl', ['ngRoute', 'regionsService']);

regionsCtrl.controller('regionsController', function($scope, regions){
	regions.list(function(regionsList){
		$scope.regions = regionsList;
	})
});

regionsCtrl.controller('regionsDetailController', function($scope, $routeParams, regions){
	regions.find($routeParams.regionName, function(countriesList){
		$scope.countriesByRegion = countriesList;
	})
});