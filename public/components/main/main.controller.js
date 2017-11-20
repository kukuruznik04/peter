// create the controller and inject Angular's $scope
angular
    .module('finalpriceApp')
    .controller('mainController',  ['$scope', 'mainService', function($scope, mainService) {

        $scope.sendButtonText = "Send";
        $scope.regexPhone = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
        // !regex.test($scope.confirmLabels.elemDuration

        $scope.submitNumber = function(form){
            if (form.phoneNumber.$valid && form.phoneNumber.$dirty)
                    $scope.sendButtonText = "";
        }

        // Retrieve experiences per role
        // feedbackService.getFeedbacks()
        //     .then(function (response) {
        //         if (response) {
        //             $scope.feedbackList = response.data;
        //         }
        //     }, function (err) {
        //         console.log("get feedback failed " + err);
        //     });

    }]);

