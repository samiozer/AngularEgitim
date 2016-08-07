;(function (angular) {
  'use strict'
  angular.module('app', []).controller('mainCtrl',['$q', function ($q) {
    function asyncGreet (name) {
     
      var deferred = $q.defer()

      setTimeout(function () {
        deferred.notify('About to greet ' + name + '.')

        if (name == 'Robin Hood') {
          deferred.resolve('Hello, ' + name + '!')
        } else {
          deferred.reject('Greeting ' + name + ' is not allowed.')
        }
      }, 1000)

      return deferred.promise
    }

    var promise = asyncGreet('Robin Hood')
     console.log('Hello');
    promise.then(function (greeting) {
       
      console.log('Success: ' + greeting)
    }, function (reason) {
      console.log('Failed: ' + reason)
    }, function (update) {
      console.log('Got notification: ' + update)
    })

     console.log('End');
  }])
})(window.angular)

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
