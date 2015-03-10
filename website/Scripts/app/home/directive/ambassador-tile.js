(function () {
    'use strict';

    var homeModule = angular.module('homeModule');

    homeModule.directive('ambassadorTile', ['AmbassadorService', '$state',
        function (AmbassadorService, $state) {
            return {
                restrict: 'E',
                replace: true,                
                templateUrl: '/Scripts/app/home/views/ambassador-tile.tpl.html',
                link: function (scope) {                    
                    var data = AmbassadorService.getData(); 
                    scope.ambassadors = angular.fromJson(data);


                    scope.open = function () {                        
                        $state.go('play');
                    }
                }
            };
        }]);
})();