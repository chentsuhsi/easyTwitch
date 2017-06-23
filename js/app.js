/**
 * Created by Thomas on 5/28/2015.
 */
angular.module('easyTwitchApp', ["ngRoute", "MainControllerModule"])

    .config(function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
            .when("/",{
                templateUrl: "views/streamersList.html",
                controller: "MainController"
            })
             .otherwise({
                redirectTo: "/"
            })
    });

