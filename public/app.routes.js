angular
	.module('finalpriceApp')
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

		$stateProvider
			.state('main', {
				url: '/main',
				templateUrl: 'components/main/main.view.html'
			});

		$urlRouterProvider.otherwise('/main');
		// $locationProvider.html5Mode(true);

	}]);