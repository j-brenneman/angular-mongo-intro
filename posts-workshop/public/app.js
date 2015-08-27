var app = angular.module('posts-workshop', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/partials/posts.html',
    controller: 'App-Controller',
  })
})


app.controller('App-Controller', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
