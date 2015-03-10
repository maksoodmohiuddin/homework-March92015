(function () {
    'use strict';

    var home = angular.module('homeModule', [
        'ui.router'
    ]);

    home.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeController',
                    templateUrl: '/Scripts/app/home/views/home.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'Home'
            }
        });
    }]);
})();