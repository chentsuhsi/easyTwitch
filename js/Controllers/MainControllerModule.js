/**
 * Created by David on 6/23/2017.
 */
angular.module("MainControllerModule", ["ngRoute", "StreamerServiceModule"])

    .controller("MainController", ["$scope", "StreamerService", function($scope, StreamerService) {
        $scope.streamerItems = StreamerService.streamerItems;

    }]);
