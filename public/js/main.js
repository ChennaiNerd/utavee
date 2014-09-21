angular.module('myApp', [
    'ngSanitize',
    'ngRoute',
    'firebase'
    ])
    .config(function ($routeProvider) {
    })
   .constant('version', '0.1')
   .constant('fbUrl', 'https://utavee.firebaseio.com/')
   .constant('fbRef', new Firebase('https://utavee.firebaseio.com'));

angular.module('myApp')
    .controller('MainController',
        function($scope, $rootScope, $firebase, fbUrl) {

    var ref = new Firebase(fbUrl + '/customers');
    $scope.customers = $firebase(ref).$asArray();

    var ref = new Firebase(fbUrl + '/operators');
    $scope.operators = $firebase(ref).$asArray();

    $scope.openChat = function (customer) {
        var ref = new Firebase(fbUrl + '/customers/' + customer.$id + '/messages');
        $scope.messages = $firebase(ref).$asArray();
        $scope.chatName = customer.name + '(' + customer.email + ')';
    }

    $scope.closeChat = function () {
        $scope.messages = [];
        $scope.chatName = null;
    }

    $scope.addMessage = function(e) {
        if (e.keyCode != 13) {
            return;
        };
        $scope.messages.$add({ body: $scope.msg, from: $rootScope.operatorName });
        $scope.msg = '';
    }
});

$(document).ready(function() {

  // Place JavaScript code here...

});

