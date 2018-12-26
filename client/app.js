var bookStoreApp = angular.module('bookStoreApp',['ngRoute']);

bookStoreApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller:'BooksController',
    templateUrl: 'views/books.html'
  })
  .when('/books/bookDetails/:id', {
    controller:'BooksController',
    templateUrl: 'views/books_details.html'
  })
  .when('/books/addBook', {
    controllers:'BooksController',
    templateUrl: 'views/add_book.html'
  }).otherwise({
    redirectTo: '/'
  });

});
