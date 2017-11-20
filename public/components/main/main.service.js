angular.module('finalpriceApp')
	.factory('mainService', ['$http', function ($http) {
		let mainService = {};

        mainService.storeMessage = function (newMsg) {
			console.log("store message");

			//console.log("NEW MSG " + JSON.stringify(newCollab));

			return $http({
				method: 'POST',
				url: '/finalpriceapi/collaboration',
				data: newMsg,
				headers: {}
			});
		};

		return mainService;
	}]);