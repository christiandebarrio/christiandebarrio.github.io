angular.module('starShips')
.controller('BookingFormController', function($scope, $http, $routeParams, $location){

  $scope.today = new Date();

  // datepicker from jquery-ui
  // $(function() {
  //   $( "#datepicker" ).datepicker({ minDate: $scope.today, dateFormat: "yy-mm-dd" });
  // });

  $scope.add = function () {
    var bookings = JSON.parse(window.localStorage.getItem("bookings")) || [];
    var newBooking = {
      date: $scope.booking.date,
      ship: $scope.ship.name,
      color: $scope.booking.color || "#000000",
      crew: $scope.booking.crew,
      troops: $scope.booking.troops
    };

    bookings.push(newBooking);

    window.localStorage.setItem("bookings", JSON.stringify(bookings));

    $location.path('/bookings');

  };

});