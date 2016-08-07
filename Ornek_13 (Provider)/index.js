var app = angular.module('mainApp', []); 


app.provider('prefix', [function() {
   var prefix = '';
     
   this.setPrefix = function(value) {
      prefix = value;
      console.log('set prefix :' + prefix);

   };
    this.$set = [function() {
      return function(value) {
           console.log('get prefix and value :'+ prefix + value);
         return prefix + value;
      }
   }];
  
   this.$get = [function() {
      return function(value) {
           console.log('get prefix and value :'+ prefix + value);
         return prefix + value;
      }
   }];
}]);


app.config(['prefixProvider', function(prefixProvider) {
   prefixProvider.setPrefix('John ');   
}]);


app.controller('myController', ['prefix', function(prefix) {
   this.value = prefix('Smith');  
    console.log('value :'+ this.value);
}]);

