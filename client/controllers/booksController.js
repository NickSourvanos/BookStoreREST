var bookStoreApp = angular.module('bookStoreApp');

bookStoreApp.controller('BooksController',
['$scope', '$http', '$location', '$routeParams',
function($scope, $http, $location, $routeParams){
  console.log('Books controller loaded...');
  $scope.getBooks = function(){
    $http.get('/api/books').then(function(response){
      $scope.books = response.data;
      console.log(response);
    });
  }
}]);
