var countriesCtrl = angular.module('countriesCtrl', ['ngRoute', 'countriesService']);

countriesCtrl.run(function($rootScope){
	$rootScope.host = 'http://localhost:8888';
});

countriesCtrl.controller('countriesController', function($scope, countries){
	countries.list(function(countries){
		$scope.countries = countries;
	});
});

countriesCtrl.controller('countriesDetailController', function($rootScope, $scope, $routeParams, $http, countries){
	countries.find($routeParams.countryName, function(country){
		$scope.country = country;
		$scope.isArray = Array.isArray;
		$scope.host = $rootScope.host;
		$scope.borders = [];

		var borderCountries = country.borders;
		
		for(var i=0; i<borderCountries.length; i++){
			$http({
				method : 'GET',
				url : 'http://localhost:8888/api/search/?isocode=' + borderCountries[i],
				cache : true
			}).success(function(response){
				$scope.borders.push(response.name);
			});
		}
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