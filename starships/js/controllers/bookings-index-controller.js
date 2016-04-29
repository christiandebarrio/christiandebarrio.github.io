angular.module('starShips')
.controller('BookingsIndexController', function($http, $scope){
  // var controller = this;

  $scope.bookings = JSON.parse(window.localStorage.getItem("bookings"));

    $scope.upcomingBookings = function(booking){
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var bookingDate = new Date(booking.date);

    return bookingDate > yesterday;  

  };


});