angular.module('starter.controllers', [])

.controller('restaurants_api', function($scope, $http) {

  $http.get("https://api.yelp.com/v2/search/?location=San Francisco, CA", {
    params: {
      oauth_consumer_key: "KeFJrAAbS7U8zFkAJ_fKtg",
      oauth_token: "J2fDylNmcrbkXIcFyavjPA6WngOUhheV",
      oauth_signature_method: "HMAC-SHA1",
      oauth_signature: "rzfTOC4ZWg5XfB4qXw3tPaZ9FN0",
      oauth_timestamp: "1455651330",
      oauth_nonce: "6XnbKy0aCBw"
    }
  }).success(function(data){
    console.log(data)
  }).error(function(error){
    console.log(error)
  })
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




