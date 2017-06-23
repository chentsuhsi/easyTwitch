/**
 * Created by David on 6/23/2017.
 */
angular.module('StreamerServiceModule', [])

    .service("StreamerService", function(){

        var streamerService = {};

        streamerService.streamerItems = [
            {id: 1, completed: true, itemName: 'ESL_SC2', date: '2014-10-00'},
            {id: 2, completed: true, itemName: 'OgamingSC2', date: '2014-10-01'},
            {id: 3, completed: true, itemName: 'cretetion', date: '2014-10-02'},
            {id: 4, completed: true, itemName: 'freecodecamp', date: '2014-10-02'},
            {id: 5, completed: true, itemName: 'storbeck', date: '2014-10-03'},
            {id: 6, completed: true, itemName: 'habathcx', date: '2014-10-03'},
            {id: 7, completed: true, itemName: 'RobotCaleb', date: '2014-10-04'},
            {id: 8, completed: true, itemName: 'noobs2ninjas', date: '2014-10-04'}
        ];

        return streamerService;
    });
