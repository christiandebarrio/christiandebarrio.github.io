angular.module('starShips')
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/ships'
    })

    .when('/ships', {
      templateUrl: 'templates/pages/ships/index.html',
      controller: 'ShipsIndexController',
      controllerAs: 'indexController'
    })

    .when('/ships/:id', {
      templateUrl: 'templates/pages/ships/show.html',
      controller: 'ShipsShowController',
      controllerAs: 'showController'
    })

    .when('/bookings', {
      templateUrl: 'templates/pages/bookings/index.html',
      controller: 'BookingsIndexController',
      controllerAs: 'indexBookingsCtrl'
    })

    .otherwise( { redirectTo: '/ships' } );
});