(function () {
    'use strict';

    var homeModule = angular.module('homeModule');
    homeModule.service('AmbassadorService', [
    function () {       
        this.getData = function () {          

            var data = [
                 {Level: 7, Name: 'EI MissingNo', XP: '5064/5600'},
                 {field: 4, Name: 'Ambassador', XP: '2316/3120'},
                 {field: 3, Name: 'Enforcemenet', XP: '5064/5600'}
            ];           

            return data;
        };       
    }]);
})();
