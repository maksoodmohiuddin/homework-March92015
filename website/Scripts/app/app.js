(function () {
    'use strict';

    /* App Module */
  
    var website = angular.module('website', [
        'homeModule',
        'playModule'
    ]);

    website.run(['$state', 
    function ($state) {
        $state.go('home');
    }]);

})();

