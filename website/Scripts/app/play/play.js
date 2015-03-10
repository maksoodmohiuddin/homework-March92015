(function () {
    'use strict';

    var play = angular.module('playModule', [
        'ui.router'
    ]);

    play.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('play', {
            url: '/play',
            views: {
                "main": {
                    controller: 'PlayController',
                    templateUrl: '/Scripts/app/play/views/play.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'Play'
            }
        });
    }]);
})();