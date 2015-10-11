angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            template: '<div ui-view></div>'
        })

    $urlRouterProvider.otherwise('/');
});

