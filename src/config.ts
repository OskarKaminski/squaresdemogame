angular.module('app').config(function ($stateProvider:any, $urlRouterProvider:any) {

    $stateProvider
        .state('app', {
            template: '<div ui-view></div>'
        })

    $urlRouterProvider.otherwise('/');
});

