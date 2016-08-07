;(function (angular) {
  'use strict'

  // Provide the wiring information in a module
  var app = angular.module('myApp', [])

  app.service('Book', [ '$rootScope', function ($rootScope) {
    var service = {
      books: [
        { title: 'Magician', author: 'Raymond E. Feist' },
        { title: 'The Hobbit', author: 'J.R.R Tolkien' }
      ],

      addBook: function (book) {
        debugger
        service.books.push(book)
        $rootScope.$broadcast('books.update')
      }
    }

    return service
  }])

  app.directive('addBookButton', [ 'Book', function (Book) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          debugger
          Book.addBook({ title: 'Star Wars', author: 'George Lucas' })
        })
      }
    }
  }])

  app.controller('myController', ['$scope', '$filter', 'Book', function ($scope, $filter, Book) {
    $scope.$on('books.update', function (event) {
      debugger
      $scope.books = Book.books
      $scope.$apply()
    })

    $scope.books = Book.books
  }])
})(window.angular)
