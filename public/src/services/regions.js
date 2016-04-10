var regionsService = angular.module('regionsService', []);

regionsService.factory('regions', function($http){
	return {
		list : function(callback){
			$http({
				method : 'GET',
				url : 'http://localhost:8888/api/regions',
				cache : false
			}).success(callback);
		},
		find : function(regionName, callback){
			$http({
				method : 'GET',
				url : `http://localhost:8888/api/regions/${regionName}`,
				cache : false
			}).success(callback);
		}
	};
});