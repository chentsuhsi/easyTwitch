/**
 * Created by David on 6/23/2017.
 */
angular.module('StreamerServiceModule', [])

    .service("StreamerService", function(){
        var client_id = '00uwquit5bkgafh8o54f2s7rljupv8';
        var accept = 'application/vnd.twitchtv.v5+json';

        var streamerService = {};

        streamerService.streamerItems = [];

        streamerService.searchItems = function($value){
          var api = 'https://api.twitch.tv/kraken/search/channels?query=' + encodeURI($value);
          var obj = [];
            $.ajaxSetup({
                headers : {
                    'Accept' : accept,
                    'Client-ID' : client_id
                }
            });
            $.getJSON(
                api,
                function (data) {
                    obj = data;
                    streamerService.streamerItems = obj;
                }
            );
            return obj;
        };

        return streamerService;
    });
