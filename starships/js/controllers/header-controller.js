angular.module('starShips')
.controller('HeaderController', function ($scope, $location){ 
    
    $scope.isActive = function (viewLocation){
      return viewLocation === $location.path();
    };

    $scope.toggleMenu= function (){
      $('.navbar-toggle').click();
    }

});

