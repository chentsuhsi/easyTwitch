/**
 * Created by Thomas on 5/28/2015.
 */
var app = angular.module('easyTwitchApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/", {
            templateUrl: "views/search.html",
            controller: "mainController"
        })
        .when("/list", {
            templateUrl: "views/streamersList.html",
            controller: "streamController"
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.factory('StreamerServices', ['$http', '$window', function ($http, $window) {
    var streamers = [];
    var client_id = '00uwquit5bkgafh8o54f2s7rljupv8';
    var accept = 'application/vnd.twitchtv.v5+json';

    return {

        requestStreamers: function (input, callback) {
            if ((input === "") || (input === undefined)) {
                input = "programming";
            }
            var api = 'https://api.twitch.tv/kraken/search/channels?query=' + encodeURI(input);

            return $http({
                method: 'GET',
                url: api,
                headers: {
                    'Accept': accept,
                    'Client-ID': client_id
                }
            }).then(function(response) {
                streamers = response.data['channels'];
                callback(response.data['channels']);
            });
        },

        getStreamers: function() {
            return streamers;
        },

        openStreamer: function(channel) {
            $window.open('https://www.twitch.tv/' + encodeURI(channel), '_blank');
        }
    };
}]);

app.controller('mainController', ['$scope', '$http', '$location', 'StreamerServices', function($scope, $http, $location, StreamerServices ){
    $scope.getItems = function (input) {
        var handleSuccess = function (data) {
            $scope.streamerItems = data;
            $location.path('/list');
        };

        StreamerServices.requestStreamers(input, handleSuccess);
    };
}]);

app.controller('streamController',['$scope', '$location', 'StreamerServices', function($scope, $location, StreamerServices){
    $scope.streamerItems = StreamerServices.getStreamers();

    $scope.openChannel = function(channelName) {
        StreamerServices.openStreamer(channelName);
    }
}]);