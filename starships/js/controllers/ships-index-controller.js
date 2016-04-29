angular.module('starShips')
.controller('ShipsIndexController', function($http, $scope){
  // var controller = this;

  $http.get('/data/ships.json').success(function(data) {
    $scope.ships = data;
  });

});