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

    $scope.getMessages = function (id) {
        var ref = new Firebase(fbUrl + '/customers/' + id + '/messages');
        $scope.messages = $firebase(ref).$asArray();;
    }

    $scope.addMessage = function(e) {
        if (e.keyCode != 13) {
            return;
        };
        $scope.messages.$add({ body: $scope.msg, from: $rootScope.userName });
        $scope.msg = '';
    }
});

