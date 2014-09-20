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

    var topRef = fbUrl + $rootScope.appID;

    var ref = new Firebase(fbUrl + '/customers');
    $scope.customers = $firebase(ref);

    var ref = new Firebase(fbUrl + '/operators');
    $scope.operators = $firebase(ref);

    $scope.getMessages = function (email) {
        var ref = new Firebase(fbUrl + '/customers/' + email + "/threads");
        var threads = $firebase(ref);
        $scope.messages = threads[0].messages;
    }

    $scope.addMessage = function(e) {
        if (e.keyCode != 13) {
            return;
        };
        $scope.messages.$add({ body: $scope.msg, from: $rootScope.userName });
        $scope.msg = '';
    }
});

