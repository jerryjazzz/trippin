angular.module('starter.controllers', [])

.controller('refresher', function($scope, $http) {

  $scope.doRefresh = function() {
    setTimeout(function(){ window.location.reload() }, 1000);
  };
})

.controller('restaurants_api', function($scope, $http, $stateParams, $state) {


  $scope.singleRestaurant = false;
  $scope.location = "";
  $scope.term = "";
  $scope.locationSearch = function (location, term) {
      var searchData = {
        location: location,
        term: term
      }

    $http.post("http://localhost:3000/", searchData).then(function(data) {
        console.log(data.data)
        $scope.data = data.data.businesses
      }, function (error) {
        console.log(error)
      })
  },

  $scope.id = "";
  $scope.findRestaurant = function (id) {
      var yelpId = {
        restaurant_id: id
      }
    $http.post("http://localhost:3000/yelpSearch/", yelpId).then(function(data) {
      console.log(data.data)
      $scope.restaurantData = data.data
    }, function (error) {
      console.log(error)
    })
    $scope.singleRestaurant = true;
  }


})

.controller('flights_api', function($scope, $http) {

      $scope.origin = "";
      $scope.destination = "";
      $scope.departureDate = "";
      $scope.returnDate = "";
      $scope.adult = "";
      $scope.child = "";
      $scope.infant = "";

  $scope.flightSearch = function (origin) {

      var flightData = {
        origin: origin
        // destination: destination,
        // departure: departureDate,
        // return: returnDate,
        // adult: adult,
        // child: child,
        // infant: infant
      }

    $http.post("http://localhost:3000/flights/", flightData).then(function(data) {
        console.log(data.data.results)
        $scope.data = data.data.results
      }, function (error) {
        console.log(flightData)
        console.log(error)
      })
  }
})


.controller('userSignUpLogin', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // LOGIN MODAL

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  // Perform the login action when the user submits the login form
  $scope.submitLogin = function() {
    console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }

  $scope.signUpData = {};
  // SIGNUP MODAL


  $scope.closeSignUp = function() {
    $scope.modal.hide();
  };

  $scope.signUp = function() {
    $ionicModal.fromTemplateUrl('templates/signup.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  // Perform the login action when the user submits the login form
  $scope.submitSignUp = function() {
    console.log('Doing login', $scope.signUpData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeSignUp();
    }, 1000);
  };
})




