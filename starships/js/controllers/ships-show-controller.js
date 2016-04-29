angular.module('starShips')
.controller('ShipsShowController', function($http, $scope, $routeParams) {
  // var controller = this;

  $http.get('/data/ships.json')
  .success(function(data) {
    $scope.ship = data[parseInt($routeParams.id) - 1];
  });

});